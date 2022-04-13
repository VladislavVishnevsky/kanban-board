import css from './TaskDetail.module.css'
import { useRouteMatch } from "react-router-dom";
import { LIST_COPY } from '../../config'

const TaskDetail = props => {

	const match = useRouteMatch()
	const { taskId } = match.params
	const { tasks } = props

	const task = tasks.find(task => task.id === taskId)
	return (
		null
	)
}

export default TaskDetail
