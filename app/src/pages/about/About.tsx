import './about.scss';
import Title from '../../components/Title';
import m from '../../images/m.png';
import ImgBlock, { ImgBlockType } from '../../components/ImgBlock';

function About() {
    return (
        <section className={'about'}>
            <Title title={'ABOUT'} />
            <div className={'about-container'}>
                <img src={m} data-aos="zoom-in" alt={'my profile'} />
                <article data-aos="fade-up">
                    <div className={'main-about'}>
                        <div>
                            최고의 결과를 위한 최선의 <b>선택</b>
                        </div>
                        <div>
                            새로운 가치를 찾기 위한 <b>열정</b>
                        </div>
                    </div>
                    <div className={'sub-about'}>
                        <div>소프트웨어마에스트로 10기 수료</div>
                        <div>숭실대학교 AI 융합학부 졸업 예정</div>
                        <div>베어유 프론트 엔드 강사</div>
                        <div>Tizen Specialist</div>
                    </div>
                    <div className={'img-block-container'}>
                        <ImgBlock type={ImgBlockType.FREEDOM}>
                            <div>임베디드부터</div>
                            <div>클라우드까지</div>
                            <div>자유롭게 다루는</div>
                            <div>
                                <b>자유</b>
                            </div>
                        </ImgBlock>
                        <ImgBlock type={ImgBlockType.TENACITY}>
                            <div>어떤 상황이든</div>
                            <div>최선의 결과를</div>
                            <div>이루어내는</div>
                            <div>
                                <b>집념</b>
                            </div>
                        </ImgBlock>
                        <ImgBlock type={ImgBlockType.CHALLENGE}>
                            <div>지나쳤던</div>
                            <div>새로운 가치를</div>
                            <div>발견하기 위한</div>
                            <div>
                                <b>도전</b>
                            </div>
                        </ImgBlock>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default About;
