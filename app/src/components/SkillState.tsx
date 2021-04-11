import './skillState.scss';
import { skillMap } from '../pages/skill/Constant';

interface SkillGraphProps {
    name: string;
    percent: number;
    show: boolean;
}

function SkillGraph({ name, percent, show }: SkillGraphProps) {
    return (
        <div className={`skill-graph ${show ? 'show' : ''}`}>
            <div className={'skill-name'}>{name}</div>
            <div
                className={'skill-percent'}
                style={{
                    flex: `${(0.8 * percent) / 100}`,
                }}
            />
            <span className={'skill-view'}>{percent}%</span>
        </div>
    );
}

interface SkillStateProps {
    skill: string;
}

function SkillState({ skill }: SkillStateProps) {
    return (
        <div
            className={'skill-state'}
            style={{
                height: `${
                    Object.values(skillMap[skill]).length * 3.5 + 4.5
                }em`,
            }}
        >
            {Object.keys(skillMap).map((value) =>
                Object.keys(skillMap[value]).map((v) => (
                    <SkillGraph
                        show={value === skill}
                        key={v}
                        name={v}
                        percent={skillMap[value][v]}
                    />
                ))
            )}
        </div>
    );
}

export default SkillState;
