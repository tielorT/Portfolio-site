import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from '../components/About';

export default function Home() {
  return (
    <div className={styles.container}>
      <About />
    </div>
  )
}
