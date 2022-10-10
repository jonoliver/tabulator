import type { NextPage } from 'next'
import Head from 'next/head'
import Riff from '../components/riff';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tabulator</title>
        <meta name="Tabulator" content="Tabulator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Tabulator
        </h1>
        <Riff />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
