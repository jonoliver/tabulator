import type { NextPage } from 'next'
import Head from 'next/head'
import Riff from '../components/riff';
import { SVG } from '../components/icon';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tabulator</title>
        <meta name="Tabulator" content="Tabulator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Riff />
      </main>
      <SVG />
    </div>
  )
}

export default Home
