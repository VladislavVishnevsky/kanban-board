import css from './Board.module.css'
import { LIST_TYPES, LIST_COPY } from '../../config'
import List from '../list/List'
import uniqid from 'uniqid'


const Board = (props) => {
	const { tasks, setTasks } = props

	const addNewTask = (title, description) => {
		const newTask = {
			id: uniqid(),
			title: title,
			description: description,
			created: new Date().toISOString(),
			status: LIST_TYPES.BACKLOG
		}
		setTasks([...tasks, newTask])
	}
	return (
		<div className={css.board}>
			{Object.values(LIST_TYPES).map(type => {
				const listTasks = tasks.filter(task => task.status === type)
				return (
					<List key={type} type={type} title={LIST_COPY[type]} tasks={listTasks} addNewTask={addNewTask} />
				)
			})}
		</div>
	)
}

export default Board
