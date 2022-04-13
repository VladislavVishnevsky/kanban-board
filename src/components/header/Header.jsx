import Logo from '../../assets/user-avatar.svg'
import css from './Header.module.css'

const Header = () => {
	return (
		<header className={css.header}>
			<h3 className={css.title}>Awesome Kanban Board</h3>
			<img className={css.sprint} src={Logo} alt='' />
		</header>
	)
}

export default Header
