import Image from 'next/image'
import styles from '../styles/About.module.css'
import img from '../public/me.jpg'

const About = () => {
    return (
        <div>
            <div className={styles.container}>
                <h2>About Me</h2>
                <div className={styles.content}>
                    <div className={styles.descr}>
                        <p>Hello, welcome to my portfolio site!
                           I'm Tielor Tomlinson, an inspiring web
                           developer with a burning passion for problem solving.
                           First found out about coding in 2020 then in 2021 i built 
                           a calculator app and since then i fell in love with programming.
                           check out my other projects below!
                        </p>
                    </div>
                    <div className={styles.img}>
                        <Image  src={img} width={400} height={400} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;