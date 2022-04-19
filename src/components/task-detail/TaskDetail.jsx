import css from './TaskDetail.module.css'
import { useRouteMatch, Link } from "react-router-dom"
import { LIST_COPY, LIST_TYPES, LIST_COLORS } from '../../config'
import { formatDate } from '../../utils'
import React from 'react'


const TaskDetail = props => {

	const match = useRouteMatch()
	const { taskId } = match.params
	const { tasks, setTasks } = props

	const task = tasks.find(task => task.id === taskId)

	const handleChange = (e) => {
		const updatedTasks = tasks.map(task => {
			if (task.id === taskId) {
				return { ...task, status: e.target.value }
			}
			return task
		})
		setTasks(updatedTasks)
	}

	return (
		<div className={css.wrapper}>
			{task ? (
				<>
					<Link to='/' className={css.homeLink}>&#8592; Back</Link>
					<div className={css.header}>
						<h2 className={css.title}>
							{task.title}
						</h2>
						<div className={css.status} style={{ background: LIST_COLORS[task.status] }}>
							{LIST_COPY[task.status]}
						</div>
					</div>
					<p className={css.createdAt}>{formatDate(task.created)}</p>
					<p>Description: {task.description || '{no description}'}</p>
					<p className={css.label}>Change status: </p>
					<select className={css.select} value={task.status} onChange={handleChange}>
						{Object.values(LIST_TYPES).map(type => {
							return (
								<option value={type}>{LIST_COPY[type]}</option>
							)
						})}
					</select>
				</>
			) : (
				<h2>Task with ID {taskId} not found</h2>
			)}
		</div>
	)
}

export default TaskDetail
