import css from './TaskDetail.module.css'
import { useRouteMatch } from "react-router-dom"
import { LIST_COPY, LIST_TYPES, LIST_COLORS } from '../../config'
import { formatDate } from '../../utils'
import React from 'react'


const TaskDetail = props => {

	const match = useRouteMatch()
	const { taskId } = match.params
	const { tasks } = props

	const task = tasks.find(task => task.id === taskId)
	return (
		<div className={css.wrapper}>
			<div className={css.header}>
				<h2 className={css.title}>
					{task.title}
				</h2>
				<div className={css.status}>
					{LIST_COPY[task.status]}
				</div>
			</div>
			<p className={css.createdAt}>{formatDate(task.created)}</p>
			<p>Description: {task.description || '{no description}'}</p>
			<p className={css.label}>Change status: </p>
			<select className={css.select} value={task.status}>
				{Object.values(LIST_TYPES).map(type => {
					<option value={type}>{LIST_COPY[type]}</option>
				})}
			</select>
		</div>
	)
}

export default TaskDetail
