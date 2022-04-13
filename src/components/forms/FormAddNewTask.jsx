import clsx from 'clsx'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import css from './Forms.module.css'

const FormAddNewTask = props => {
	const { addNewTask, setFormVisible } = props
	const [values, setValues] = useState({
		title: '',
		description: '',
	})

	const {
		register,
		formState: {
			errors
		},
		handleSubmit
	} = useForm();

	const handleChange = (e) => {
		const fieldName = e.target.name
		setValues({ ...values, [fieldName]: e.target.value })
	}


	const onSubmit = (e) => {
		// e.preventDefault()
		if (values.title) {
			addNewTask(values.title, values.description)
			setFormVisible()
		}

	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={css.form} >
			<input
				{...register('title', {
					required: 'Поле обязательно к заполнению'
				})}
				className={css.input}
				id='taskTitle'
				name='title'
				type='text'
				placeholder='Enter task title'
				value={values.title}
				onChange={handleChange}
			/>
			<div style={{ height: 20, color: 'red', fontSize: 12, margin: 0 }}>
				{errors?.title && <p style={{ margin: 0 }}>{errors?.title?.message || 'Error!'}</p>}
			</div>
			<textarea
				className={clsx(css.input, css.textarea)}
				id='taskDescription'
				name='description'
				placeholder='Enter task description'
				value={values.description}
				onChange={handleChange}
			/>
			<button className={css.submit} type='submit'>Add</button>
		</form>
	)
}

export default FormAddNewTask

