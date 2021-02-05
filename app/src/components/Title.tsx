import './title.scss'

interface TitleProps {
	title: string;
}

function Title({title}: TitleProps) {
	return <div className={'title'}>
		<div className={'title__in'}>
			{title}
		</div>
	</div>
}

export default Title;
