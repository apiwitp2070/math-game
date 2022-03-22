import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link';

// styles
const Button = 'border border-slate-900 py-2 bg-white rounded-md hover:border-yellow-500 hover:text-yellow-300 hover:bg-slate-900 md:hover:scale-110 transition duration-300';

const Random = () => {
  const [number, setNumber] = useState(0);

  const handleRandomNumber = (num: number) => {
    switch(num) {
      case 2: 
        setNumber(Math.floor(Math.random() * (99 - 10 + 1) ) + 10);
        break;
      case 3: 
        setNumber(Math.floor(Math.random() * (999 - 100 + 1) ) + 100);
        break;
      case 6: 
        setNumber(Math.floor(Math.random() * (999999 - 100000 + 1) ) + 100000);
        break;
    }
  }

  return (
    <div className='bg-slate-900 text-white h-screen'>
      <Head>
        <title>Random Number</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='p-4'>
        <Link href={'/'} passHref>
          <h1 className='text-2xl hover:text-yellow-200 hover:translate-x-1 transition duration-300'>
            Home
          </h1>
        </Link>
      </header>

      <main className='mx-8'>
        <h1 className='py-16 font-semibold text-4xl text-center'>RNG</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-black max-w-lg mx-auto'>
          <button onClick={(e) => handleRandomNumber(2)} className={Button}>2 Digits</button>
          <button onClick={(e) => handleRandomNumber(3)} className={Button}>3 Digits</button>
          <button onClick={(e) => handleRandomNumber(6)} className={Button}>6 Digits</button>
        </div>
        <h1 className='pt-28 text-center text-6xl sm:text-7xl text-yellow-200'>
          {number}
        </h1>
        <h1 className='py-4 text-center text-2xl h-16'>
          {number === 77 ? 'Nice! a double seven' 
            : number === 777 ? 'A jackpot! Now go buy a lottery'
            : number === 777777 ? "Wow... What a luck!" 
            : ''}
        </h1>
      </main>
    </div>
  )
}

export default Random