import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import data from './mock.json'

function App() {
	const [tasks, setTasks] = useState(data)
	return (
		<Router>
			<div className='wrapper'>
				<Header />
				<Main tasks={tasks} setTasks={setTasks} />
				<Footer tasks={tasks} />
			</div>
		</Router >
	)
}

export default App
