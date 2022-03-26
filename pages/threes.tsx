import { ApiError } from "next/dist/server/api-utils";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Countdown, { CountdownApi } from 'react-countdown';

// styles
const StartButton = 'text-4xl font-semibold bg-white border border-white rounded-md text-black py-12 px-10 transition duration-300 hover:text-white hover:bg-slate-900 hover:-translate-y-6 hover:border-yellow-300 active:scale-90';
const Button = 'text-4xl font-semibold bg-white rounded-md text-black py-12 px-8 transition duration-300 active:duration-100 hover:-translate-y-2 hover:text-blue-600 active:scale-90';

const Threes = () => {

  const [time, setTime] = useState(Date.now() + 59000);
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);

  const [numbers, setNumber] = useState([
    { id: 0, value: Math.floor(Math.random() * (99 - 10 + 1) ) + 10 },
    { id: 1, value: Math.floor(Math.random() * (99 - 10 + 1) ) + 10 },
    { id: 2, value: Math.floor(Math.random() * (99 - 10 + 1) ) + 10 },
  ]);

  useEffect(() => {
    if (start) setTime(Date.now() + 60000);
  }, [start]);

  const handleStart = (e: any) => {
    setTimeout(() => setStart(!start), 300);
  }

  const handleFinished = () => {
    setStart(false);
  }

  const handleSelect = (id: number, val: number) => {
    const select = numbers[id].value;
    const min = numbers.reduce(
      (num1, num2) =>
        num1.value < num2.value ? num1 : num2
    )

    if (select == min.value) {
      setCount(count + 1);
      let newNumbers = [...numbers];
      newNumbers[id].value = select + Math.floor(Math.random() * (99 - 10 + 1) ) + 10;
      setNumber(newNumbers);
    }
    else {
      count - 5 > 0 ? setCount(count - 5) : setCount(0);
    }
  }

  // Renderer callback with condition
  const renderer = ({ seconds, completed}: any) => {
    if (completed) {
      return <span>0</span>;
    } else {
      return <span>{seconds}</span>;
    }
  };

  return (
    <div className="bg-slate-900">
      <Head>
        <title>THR3ES</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='p-4'>
        <Link href={'/'} passHref>
          <h1 className='text-2xl text-white hover:text-yellow-200 hover:translate-x-1 transition duration-300'>
            Home
          </h1>
        </Link>
      </header>

      <main className="place h-screen">
        <h1 className="text-9xl p-24 text-white text-center">
          {start ?
          <Countdown
            key={time}
            date={time}
            autoStart={start}
            onComplete={handleFinished}
            renderer={renderer}
          /> : 60}
        </h1>
        <div className={start
          ? "grid grid-cols-3 max-w-xl mx-auto gap-8" 
          : "grid grid-cols-1 max-w-xl mx-auto gap-8"}>
          { !start?
            <button onClick={handleStart} className={StartButton}>Start</button>
            :
            numbers.map(({id, value}) => (
              <button 
                key={id} 
                className={Button} 
                onClick={() => handleSelect(id, value)}
                style={{maxWidth: 120, minWidth:120}}
              >
                {value}
              </button>
            ))
          }
        </div>
        <h1 className="text-xl text-center pt-20 text-white">
          Score: {count}
        </h1>
        <h1 className="text-xl text-center pt-8 text-white">
          Select a number from smallest to largest. You have 60 seconds each round. Gotta go fast!
        </h1>
      </main>
    </div>
  )
}

export default Threes;