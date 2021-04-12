import './home.scss';
import Typing from 'react-typing-animation';

function Home() {
    return (
        <div className={'home'}>
            <Typing data-aos="zoom-in" speed={10} hideCursor={true}>
                <div>
                    풀 스택 이상의 <Typing.Delay ms={200} />
                    <Typing.Speed ms={200} />
                    <b>자유</b>
                    <Typing.Speed ms={10} />
                </div>
                <div>
                    최선 결과를 향한 <Typing.Delay ms={200} />
                    <Typing.Speed ms={200} />
                    <b>집념</b>
                    <Typing.Speed ms={10} />
                </div>
                <div>
                    새로운 가치를 위한 <Typing.Delay ms={200} />
                    <Typing.Speed ms={200} />
                    <b>도전</b>
                    <Typing.Speed ms={10} />
                </div>
            </Typing>
        </div>
    );
}

export default Home;
