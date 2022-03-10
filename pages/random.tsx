import Head from 'next/head'
import { useState } from 'react'

// styles
const Button = 'py-2 bg-white rounded-md hover:bg-orange-300 transition duration-300'

const Random = () => {
  const [number, setNumber] = useState(0);

  const handleRandomNumber = (num: number) => {
    switch(num) {
      case 2: 
        setNumber(Math.floor(Math.random() * 100));
        break;
      case 3: 
        setNumber(Math.floor(Math.random() * 1000));
        break;
      case 6: 
        setNumber(Math.floor(Math.random() * 1000000));
        break;
    }
  }

  return (
    <div className='bg-black text-white'>
      <Head>
        <title>Random Number</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='py-16 font-semibold text-4xl text-center'>RNG</h1>
        <div className='grid grid-cols-3 gap-8 text-black max-w-lg mx-auto'>
          <button onClick={(e) => handleRandomNumber(2)} className={Button}>2 Digits</button>
          <button onClick={(e) => handleRandomNumber(3)} className={Button}>3 Digits</button>
          <button onClick={(e) => handleRandomNumber(6)} className={Button}>6 Digits</button>
        </div>
        <h1 className='py-8 text-center text-3xl'>{number}</h1>
      </main>
    </div>
  )
}

export default Random