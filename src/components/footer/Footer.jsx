import css from './Footer.module.css'
import { LIST_COPY, LIST_TYPES } from "../../config";

const Footer = props => {
	const { tasks } = props
	return (
		<footer className={css.footer}>
			<div className={css.counts}>
					{Object.values(LIST_TYPES).map(type => {
						const listCount = tasks.filter(task => task.status === type)
						if (!listCount.length) return null
						return (
							<div className={css.count}>
								{LIST_COPY[type]}: {listCount.length}
							</div>
						)
					})}
			</div>
			<div className={css.copy}>
				Kanban board by <a href='https://github.com/VladislavVishnevsky' target='_blank' rel='noreferrer'>Vladilsav Vishnevsky</a>
			</div>
		</footer>
	)
}

export default Footer
