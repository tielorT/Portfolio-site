import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul>
                    <li>Home</li>
                </ul>
                <ul>
                    <li>About</li>
                </ul>
                <ul>
                    <li>Work</li>
                </ul>
                <ul>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav