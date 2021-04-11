import './slidContainer.scss';
import React, { useEffect, useState } from 'react';

interface SlidButtonProps {
    name: string;
    onClick: () => void;
    idx: number;
    nowIndex: number;
    size: number;
}

function SlidButton({ name, onClick, idx, nowIndex, size }: SlidButtonProps) {
    return (
        <div
            className={`slid-button ${nowIndex === idx ? 'selected' : ''} ${
                nowIndex - 1 === idx || (nowIndex - 1 < 0 && size - 1 === idx)
                    ? 'near-left'
                    : ''
            } ${
                nowIndex + 1 === idx || (nowIndex + 1 === size && idx === 0)
                    ? 'near-right'
                    : ''
            }`}
            onClick={onClick}
        >
            <div className={'slid-button__main'}>{name}</div>
            <div className={'slid-button__bottom'} />
            <div className={'slid-button__bottom__cover'} />
        </div>
    );
}

interface SlidContainerProps {
    data: string[];
    onChange: (idx: string) => void;
}

function SlidContainer({ data, onChange }: SlidContainerProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        onChange(data[index]);
    }, [index]);

    return (
        <div className={'slid-container'}>
            {data.map((value, idx) => (
                <SlidButton
                    size={data.length}
                    key={idx}
                    idx={idx}
                    nowIndex={index}
                    onClick={() => {
                        setIndex(idx);
                    }}
                    name={value}
                />
            ))}
            <div
                className={'arrow-left'}
                onClick={() =>
                    setIndex((prevState) =>
                        prevState - 1 < 0 ? data.length - 1 : prevState - 1
                    )
                }
            />
            <div
                className={'arrow-right'}
                onClick={() =>
                    setIndex((prevState) =>
                        prevState + 1 === data.length ? 0 : prevState + 1
                    )
                }
            />
        </div>
    );
}

export default SlidContainer;
