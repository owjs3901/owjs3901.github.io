<?
	//세션을 사용하기 위해 선언하는 부분
	session_cache_limiter('');
	session_start();
	
	//데이터베이스에 접근하기 위한 부분
	$dbid = "root";
	$dbpass = "12345";
	$dbname ="test";
	$dbhost = "localhost";
	
	$sqlConn = mysql_connect($dbhost, $dbid, $dbpass);
	mysql_select_db($dbname, $sqlConn);
	
	//아이디와 비밀번호의 값을 POST방식으로 받는 것
	$id = $_POST['loginID'];
	$pass = $_POST['loginPASS'];
	
	//입력받은 아이디가 존재하는지 체크하기 위해 데이터베이스에서 id를 가져옴
	$getID = "SELECT id FROM users WHERE id='$id'";
	$getID = mysql_fetch_array(mysql_query($getID));
	
	//아이디가 있다면
	if($getID['id']) {
		//아이디를 바탕으로 그 아이디가 가진 곳의 비밀번호를 가져온다
		$getPASS = "SELECT pass FROM users WHERE id='$id'";
		$getPASS = mysql_result(mysql_query($getPASS), 0);
		
		//데이터베이스에서 가져온 비밀번호가 입력받은 비밀번호와 같다면,
		if($getPASS == $pass) {
			//64자리의 무작위 문자열을 생성한다.
			//이 64자리의 임의의 수가 바로 토큰으로 로그인 대조에 사용할 키 값.
			$key = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^/';
			for($i=0;$i<=63;$i++)
				$token .= $key[rand(0,63)];
			
			//방금 만든 토큰을 데이터베이스에 업데이트한다.
			//입력받은 아이디가 있는 위치에 업데이트.
			$updateToken = "UPDATE users SET token='$token' WHERE id='$id'";
			$updateToken = mysql_query($updateToken);
		
			//세션에 토큰 즉 키 값을 등록한다.
			$_SESSION['token'] = $token;
		
			return 0;
		}
		else {
			echo "PASSWORD ERROR";
			return 1;
		}
	}
	
	else {
		echo "ID DOESN'T EXIST";
		return 1;
	}
?>