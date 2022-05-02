import Head from 'next/head'
import Link from 'next/link'

const Card = 'bg-white rounded-md p-4 h-32 hover:text-blue-500';
const Title = 'font-semibold mb-2';

const Home = () => {
  return (
    <div className='bg-slate-700'>
      <Head>
        <title>Math Game</title>
        <meta name="description" content="A collection of maths" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='min-h-screen p-8 flex-1 flex-col justify-center'>
        <h1 className='text-white text-6xl text-center'>
          Math Game
        </h1>

        <p className='text-white text-2xl text-center my-16'>
          Select one below to try it out
        </p>

        <div className='mx-auto max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-8'>
          <Link href="/random" passHref>
            <a className={Card}>
              <h2 className={Title}>Random &rarr;</h2>
              <p>Generating a random value ...Mabye using it to buy a lottery?</p>
            </a>
          </Link>

          <Link href="/guess">
            <a className={Card}>
              <h2 className={Title}>Guess &rarr;</h2>
              <p>Guess a number!</p>
            </a>
          </Link>

          <a
            href="https://apiwitp2070.github.io/calculator/"
            target='_blank'
            rel='noopener noreferrer'
            className={Card}
          >
            <h2 className={Title}>Calculator &rarr;</h2>
            <p>Calculator. Just a very simple calculator.</p>
          </a>

          <Link href="/threes">
            <a className={Card}>
              <h2 className={Title}>THR3ES &rarr;</h2>
              <p>3 cards, 3 numbers. Pick one and become the great one.</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home;
