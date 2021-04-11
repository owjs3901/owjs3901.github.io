import './skill.scss';
import Title from '../../components/Title';
import SlidContainer from '../../components/SlidContainer';
import SkillState from '../../components/SkillState';
import { skillMap } from './Constant';
import { useState } from 'react';

function Skill() {
    const [value, setValue] = useState(Object.keys(skillMap)[0]);
    return (
        <div id={'skill-wr'}>
            <section id={'skill'}>
                <Title title={'SKILL'} />
                <SlidContainer
                    onChange={setValue}
                    data={Object.keys(skillMap)}
                />
                <SkillState skill={value} />
            </section>
        </div>
    );
}

export default Skill;
