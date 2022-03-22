import Head from 'next/head'
import Link from 'next/link';
import { useState } from 'react'

// styles
const Button = 'py-2 bg-white rounded-md hover:scale-110 transition duration-300'

const Random = () => {
  const [number, setNumber] = useState(0);
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 1000));
  const [guess, setGuess] = useState('');
  const [text, setText] = useState('');
  const [remain, setRemain] = useState(10);
  const [correct, setCorrect] = useState(false);

  const handleKeyDown = (event: any, num: number) => {
    if (event.key === 'Enter') {
      handleGuessing(num);
    }
  }

  const handleGuessing = (num: number) => {
    if (num > answer) {
      setRemain(remain-1);
      if (num-answer <= 10) {
        setText('A bit lower');
      }
      else setText('Mabye lower');
    }
    else if (num < answer) {
      setRemain(remain-1);
      if (answer-num <= 10) {
        setText('A bit higher');
      }
      else setText('Mabye higher');
    }
    else if (num === answer) {
      setText(`Correct! The number is`);
      setCorrect(true);
    }
    setGuess('');
  }

  const handleReset = () => {
    setAnswer(Math.floor(Math.random() * 1000));
    setRemain(10);
    setCorrect(false);
    const num = Math.floor(Math.random()*10);
    if (num < 2) setText('Hmm...');
    else if (num < 5) setText('Oh? Again?');
    else if (num < 8) setText('Go Go Go!');
    else setText('You can do it!');
    console.log(num);
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

      <main>
        <h1 className='uppercase pt-12 pb-8 font-semibold text-4xl text-center'>Guess a Number</h1>
        <h1 className='text-center text-2xl'>Try Guessing :)</h1>
        <div className='mx-auto mt-12 w-48 flex flex-col justify-center'>
          <input
            type="tel"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            disabled = {correct ? true : remain > 0 ? false : true}
            onKeyDown={(e) => handleKeyDown(e, parseInt(guess))} 
            onChange={(e) => setGuess(e.target.value)} 
            value={guess}
            className='my-4 rounded-md focus:outline-none bg-none text-black text-center px-2 py-1'>
          </input>
          <h1 className='text-center pt-4'>Remaining Attempts:</h1>
          <h1 className='text-center pt-4'>{remain}/10</h1>
          <h1 className='text-center py-4'>{remain > 0 ? text : ":("}</h1>
          <h1 className='text-center text-4xl text-yellow-200 pt-4 pb-12'>{correct ? answer : ""}</h1>
          <button 
            onClick={handleReset}
            className={correct 
              ? 'rounded-md bg-white text-black' :remain > 0 
              ? 'hidden' : 'rounded-md bg-white text-black'}
          >
            Reset
          </button>
        </div>
      </main>
    </div>
  )
}

export default Random