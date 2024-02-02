import s from './StandartButton.module.scss';

export const StandartButton = ({type, content, svg, className, onClick}) => {
	return (
		<button type={type} className={`${s.default} ${className}`} onClick={onClick}>{content} {svg}</button>
	)
}