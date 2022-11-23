import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul>
                    <li><a href='#about'>About</a></li>
                </ul>
                <ul>
                    <li><a href='#projectLink'>Projects</a></li>
                </ul>
                <ul>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav