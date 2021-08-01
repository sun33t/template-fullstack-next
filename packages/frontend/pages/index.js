import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next JS Front End</title>
        <meta name="Next JS Front End" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>This is a front end bootstrapped with Next.JS</h1>
      </main>
    </div>
  )
}