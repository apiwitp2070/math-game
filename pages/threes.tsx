import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Countdown from 'react-countdown';

// styles
const StartButton = 'text-4xl font-semibold bg-white border border-white rounded-md text-black py-12 px-10 transition duration-300 hover:text-white hover:bg-slate-900 hover:-translate-y-6 hover:border-yellow-300 active:scale-90';
const Button = 'text-4xl font-semibold bg-white rounded-md text-black py-12 transition duration-300 active:duration-100 hover:-translate-y-2 hover:text-blue-600 active:scale-90';
const ButtonCritical = 'text-4xl font-semibold bg-red-500 text-white rounded-md py-12 animate-pulse transition duration-300 active:duration-100 hover:-translate-y-2 hover:text-yellow-200 active:scale-110';
const ButtonMachine = 'text-4xl font-semibold bg-green-500 text-white rounded-md py-12 animate-pulse transition duration-300 active:duration-100 hover:-translate-y-2 hover:text-yellow-200 active:scale-110';

const Threes = () => {

  const [machine_count, setMachineCount] = useState(0);
  const [time, setTime] = useState(Date.now() + 59000);
  const [start, setStart] = useState(false);
  const [finish, setFinish] = useState(false);
  const [count, setCount] = useState(0);
  const [high, setHigh] = useState(0);
  const [score, setHighscore] = useState(0);
  const [highnum, setHighNumber] = useState(0);

  const [numbers, setNumber] = useState([
    { id: 0, value: Math.floor(Math.random() * (99 - 10 + 1) ) + 10, crit: false, machine: false },
    { id: 1, value: Math.floor(Math.random() * (99 - 10 + 1) ) + 10, crit: false, machine: false },
    { id: 2, value: Math.floor(Math.random() * (99 - 10 + 1) ) + 10, crit: false, machine: false },
  ]);
  const init = [
    { id: 0, value: Math.floor(Math.random() * (99 - 10 + 1) ) + 10, crit: false, machine: false },
    { id: 1, value: Math.floor(Math.random() * (99 - 10 + 1) ) + 10, crit: false, machine: false },
    { id: 2, value: Math.floor(Math.random() * (99 - 10 + 1) ) + 10, crit: false, machine: false },
  ];

  useEffect(() => {
    if (start) setTime(Date.now() + 59000);
  }, [start]);

  const handleStart = (e: any) => {
    setNumber(init);
    setTimeout(() => setStart(!start), 300);
    setCount(0);
    setFinish(false);
  }

  const handleFinished = () => {
    if (count > score) {
      setHighscore(count);
    }
    if (high > highnum) {
      setHighNumber(high);
    }
    setStart(false);
    setFinish(true);
  }

  const handleSelect = (id: number, select: number, critical: boolean, machine: boolean) => {
    const min = numbers.reduce(
      (num1, num2) =>
        num1.value < num2.value ? num1 : num2
    )

    if (critical) {
      setCount(count + 10);
      let newNumbers = [...numbers];
      newNumbers[0].value = (count * count) + select + Math.floor(Math.random() * (count + 99 - 10 + 1) ) + 10;
      newNumbers[1].value = (count * count) + select + Math.floor(Math.random() * (count + 99 - 10 + 1) ) + 10;
      newNumbers[2].value = (count * count) + select + Math.floor(Math.random() * (count + 99 - 10 + 1) ) + 10;
      setNumber(newNumbers);
      setHigh(select);
      newNumbers[id].crit = false;
    }
    else if (machine) {
      setCount(count + 1);
      let newNumbers = [...numbers];
      newNumbers[0].value = select + Math.floor(Math.random() * (count + 99 - 10 + 1) ) + 10;
      newNumbers[1].value = select + Math.floor(Math.random() * (count + 99 - 10 + 1) ) + 10;
      newNumbers[2].value = select + Math.floor(Math.random() * (count + 99 - 10 + 1) ) + 10;
      setNumber(newNumbers);
      setHigh(select);
      if (machine_count == 10) {
        newNumbers[id].machine = false;
        setMachineCount(0);
      }
      else {
        setMachineCount(machine_count + 1);
      }
    }
    else if (select == min.value) {
      setCount(count + 1);
      let newNumbers = [...numbers];
      let crit = Math.floor(Math.random() * (100 - 10 + 1) ) + 10;
      let machine = Math.floor(Math.random() * (100 - 10 + 1) ) + 10;
      newNumbers[id].value = count + select + Math.floor(Math.random() * (99 - 10 + 1) ) + 10;
      if (crit % 10 == 0) {
        newNumbers[id].crit = true;
      }
      else if (machine % 10 == 0) {
        newNumbers[id].machine = true;
      }
      setNumber(newNumbers);
      setHigh(select);
    }
    else {
      count - 5 > 0 ? setCount(count - 5) : setCount(0);
    }
  }

  const renderer = ({ seconds, completed}: any) => {
    if (completed) {
      return <span>0</span>;
    } else {
      return <span>{seconds}</span>;
    }
  };

  return (
    <div className="bg-slate-900 h-screen">
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

      <main>
        <h1 className="text-9xl p-20 text-white text-center">
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
            numbers.map(({id, value, crit, machine}) => (
              <button 
                key={id} 
                className={crit ? ButtonCritical : machine ? ButtonMachine : Button} 
                onClick={() => handleSelect(id, value, crit, machine)}
                style={{maxWidth: 120, minWidth:120}}
              >
                {value}
              </button>
            ))
          }
        </div>
        <h1 className="text-xl text-center pt-16 text-white">
          {finish ? `Well Done! You got ${count} point(s)!` : `Score: ${count}`}
        </h1>
        <h1 className="text-xl text-center pt-4 text-white">
          High Score: {score} | Highest Number: {highnum}
        </h1>
        <h1 className="text-xl text-center pt-8 text-white">
          Select smallest number from the group. You have 60 seconds each round. Gotta go fast!
        </h1>
      </main>
    </div>
  )
}

export default Threes;