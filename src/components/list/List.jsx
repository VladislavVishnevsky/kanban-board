import css from './List.module.css'
import { Link } from 'react-router-dom'
import { LIST_COLORS, LIST_TYPES } from '../../config'
import { useState } from 'react'
import FormAddNewTask from '../forms/FormAddNewTask'


const List = props => {
	const { title, type, tasks, addNewTask } = props
	const [isFormVisible, setFormVisible] = useState(false)

	const handleClick = () => {
		setFormVisible(!isFormVisible)
	}


	return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{title}</h2>
			{tasks.map(task => {
				return (
					<Link to={`task/${task.id}`} className={css.taskLink}><div key={task.id} className={css.task} style={{ background: LIST_COLORS[type] }}>{task.title}</div>
					</Link>
				)
			})}
			{type === LIST_TYPES.BACKLOG && (
				<div className={css.newCardBlock}>
					<button className={css.addButton} onClick={handleClick}>Add card</button>
				</div>

			)}
			{type === LIST_TYPES.BACKLOG && isFormVisible && (
				<FormAddNewTask addNewTask={addNewTask} setFormVisible={setFormVisible} />

			)}
		</div >
	)
}

export default List
