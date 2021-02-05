import "./about.scss"
import Title from "../../components/Title";
import m from "../../images/m.png"

function About() {
	return <section>
		<Title title={'ABOUT'}/>
		<div className={'about-container'}>
			<img src={m}/>
			<article>
				<div className={'main-about'}>
					<div>
						최고의 결과를 위한 최선의 <b>선택</b>
					</div>
					<div>
						새로운 가치를 찾기 위한 <b>열정</b>
					</div>
				</div>
				<div className={'sub-about'}>
					<div>
						소프트웨어마에스트로 10기 수료
					</div>
					<div>
						숭실대학교 AI 융합학부 졸업 예정
					</div>
					<div>
						베어유 프론트 엔드 강사
					</div>
					<div>
						Tizen Specialist
					</div>
				</div>
			</article>
		</div>
	</section>
}

export default About;
