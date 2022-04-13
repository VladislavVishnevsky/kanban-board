import css from './Footer.module.css'

const Footer = props => {
	return (
		<footer className={css.footer}>
			<div className={css.counts} />
			<div className={css.copy}>
				Kanban board by <a href='https://github.com/VladislavVishnevsky' target='_blank' rel='noreferrer'>Vladilsav Vishnevsky</a>
			</div>
		</footer>
	)
}

export default Footer
