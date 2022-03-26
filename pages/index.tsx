import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Math Game</title>
        <meta name="description" content="Wanna play some math games?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Math Game!
        </h1>

        <p className={styles.description}>
          A collection of math game
        </p>

        <div className={styles.grid}>
          <Link href="/random" passHref>
            <a className={styles.card}>
              <h2>Random &rarr;</h2>
              <p>Generating a random value ...Mabye for a lottery?</p>
            </a>
          </Link>

          <Link href="/guess">
            <a className={styles.card}>
              <h2>Guess &rarr;</h2>
              <p>Guess a number!</p>
            </a>
          </Link>

          <a
            href="https://laevatein2070.github.io/calculator/"
            className={styles.card}
          >
            <h2>Calculator &rarr;</h2>
            <p>Calculator. Just a very simple calculator.</p>
          </a>

          <a
            href="/threes"
            className={styles.card}
          >
            <h2>THR3ES &rarr;</h2>
            <p>
              3 Cards, 3 Numbers. Pick them in order and become the big one.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home
