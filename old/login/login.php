<?
	//������ ����ϱ� ���� �����ϴ� �κ�
	session_cache_limiter('');
	session_start();
	
	//�����ͺ��̽��� �����ϱ� ���� �κ�
	$dbid = "root";
	$dbpass = "12345";
	$dbname ="test";
	$dbhost = "localhost";
	
	$sqlConn = mysql_connect($dbhost, $dbid, $dbpass);
	mysql_select_db($dbname, $sqlConn);
	
	//���̵�� ��й�ȣ�� ���� POST������� �޴� ��
	$id = $_POST['loginID'];
	$pass = $_POST['loginPASS'];
	
	//�Է¹��� ���̵� �����ϴ��� üũ�ϱ� ���� �����ͺ��̽����� id�� ������
	$getID = "SELECT id FROM users WHERE id='$id'";
	$getID = mysql_fetch_array(mysql_query($getID));
	
	//���̵� �ִٸ�
	if($getID['id']) {
		//���̵� �������� �� ���̵� ���� ���� ��й�ȣ�� �����´�
		$getPASS = "SELECT pass FROM users WHERE id='$id'";
		$getPASS = mysql_result(mysql_query($getPASS), 0);
		
		//�����ͺ��̽����� ������ ��й�ȣ�� �Է¹��� ��й�ȣ�� ���ٸ�,
		if($getPASS == $pass) {
			//64�ڸ��� ������ ���ڿ��� �����Ѵ�.
			//�� 64�ڸ��� ������ ���� �ٷ� ��ū���� �α��� ������ ����� Ű ��.
			$key = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^/';
			for($i=0;$i<=63;$i++)
				$token .= $key[rand(0,63)];
			
			//��� ���� ��ū�� �����ͺ��̽��� ������Ʈ�Ѵ�.
			//�Է¹��� ���̵� �ִ� ��ġ�� ������Ʈ.
			$updateToken = "UPDATE users SET token='$token' WHERE id='$id'";
			$updateToken = mysql_query($updateToken);
		
			//���ǿ� ��ū �� Ű ���� ����Ѵ�.
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