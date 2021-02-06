import './imgBlock.scss';
import React from 'react';
import freedom from '../images/freedom.svg';
import tenacity from '../images/tenacity.svg';
import challenge from '../images/challenge.svg';

export enum ImgBlockType {
    // eslint-disable-next-line no-unused-vars
    FREEDOM = 'freedom',
    // eslint-disable-next-line no-unused-vars
    TENACITY = 'tenacity',
    // eslint-disable-next-line no-unused-vars
    CHALLENGE = 'challenge',
}

const obj: any = {};

obj[ImgBlockType.FREEDOM] = freedom;
obj[ImgBlockType.TENACITY] = tenacity;
obj[ImgBlockType.CHALLENGE] = challenge;

function ImgBlock({
    children,
    type,
}: {
    children: React.ReactNode;
    type: ImgBlockType;
}) {
    return (
        <div className={'img-block'}>
            {children}
            <img className={type} src={obj[type]} alt={'keyword img'} />
        </div>
    );
}

export default ImgBlock;
