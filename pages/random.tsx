import Head from 'next/head'
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
      setText(`Correct! The number is ${answer}`);
      setCorrect(true);
    }
    setGuess('');
  }

  const handleReset = () => {
    setAnswer(Math.floor(Math.random() * 1000));
    setRemain(10);
    setCorrect(false);
  }

  return (
    <div className='bg-slate-900 text-white h-screen'>
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
        <h1 className='pt-8 text-center text-3xl'>{number}</h1>
        <h1 className='py-4 text-center text-2xl h-16'>
          {number === 77 ? 'Nice! a double seven' 
            : number === 777 ? 'A jackpot! Now go buy a lottery'
            : number === 777777 ? "Wow... What a luck!" 
            : ''}
        </h1>
        <h1 className='uppercase pt-12 pb-8 font-semibold text-4xl text-center'>Guess a Number</h1>
        <h1 className='text-center text-2xl'>Try Guessing :)</h1>
        <div className='mx-auto w-48 flex flex-col justify-center'>
          <input
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
          <h1 className='text-center pt-4'>{remain}/10</h1>
          <h1 className='text-center py-4'>{remain > 0 ? text : ":("}</h1>
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