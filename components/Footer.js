import styles from '../styles/Footer.module.css'
import { SiGithub } from 'react-icons/si'
import { SiLinkedin } from 'react-icons/si'

const Footer = () => {
    return (
            <div className={styles.content}>
                <div className={styles.socials}>
                    <h3>SOCIAL</h3>
                    <div>
                        <span className={styles.footerIcons}><a href='https://github.com/tielorT?tab=repositories' target='_blank'>
                             <SiGithub style={{ color: '#3E7D80', margin: '5px'}} size='30px'/></a></span>
                        <span className={styles.footerIcons}><a href='https://www.linkedin.com/in/tielor-tomlinson-29742624b/' target='_blank'>
                            <SiLinkedin style={{ color: '#3E7D80', margin: '5px'}} size='30px'/></a></span>
                    </div>
                </div>
                <div className={styles.footerEnd}>
                    <p>site made by Tielor tomlisnon</p>
                </div>
            </div>
    )
}

export default Footer;