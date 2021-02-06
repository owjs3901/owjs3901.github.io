import './skill.scss';
import Title from '../../components/Title';
import SlidContainer from '../../components/SlidContainer';
import SkillState from '../../components/SkillState';

function Skill() {
    return (
        <section className={'skill'}>
            <Title title={'SKILL'} />
            <SlidContainer
                onChange={(idx) => {}}
                data={[
                    'Language',
                    'Server',
                    'Web Front',
                    'Embedded',
                    'Mobile',
                    'Etc',
                ]}
            />
            <SkillState />
        </section>
    );
}

export default Skill;
