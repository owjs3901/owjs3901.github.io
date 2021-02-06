import './title.scss';

interface TitleProps {
    title: string;
}

function Title({ title }: TitleProps) {
    return (
        <div className={'title'} data-aos="fade-up">
            <div className={'title__in'}>{title}</div>
        </div>
    );
}

export default Title;
