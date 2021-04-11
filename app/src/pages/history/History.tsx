import './history.scss';
import Title from '../../components/Title';
import SlidContainer from '../../components/SlidContainer';
import { historyMap } from './Constant';
import { useState } from 'react';

function History() {
    // eslint-disable-next-line no-unused-vars
    const [_, setValue] = useState(Object.keys(historyMap)[0]);
    return (
        <section id={'history'}>
            <Title title={'HISTORY'} />
            <SlidContainer onChange={setValue} data={Object.keys(historyMap)} />
        </section>
    );
}

export default History;
