import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from '../components/About';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div className={styles.container}>
      <About />
      <Projects />
    </div>
  )
}
