import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>T-hands || Team Thirike</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">T-Hands</a>
        </h1>

        <p className={styles.description}>
          Website Under Construction !
        </p>

      </main>

    </div>
  )
}
