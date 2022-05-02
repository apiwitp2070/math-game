import Link from "next/link";
import React from "react";

const HomeBtn = () => {
  return (
    <header className='p-4 w-fit cursor-pointer'>
        <Link href={'/'} passHref>
          <h1 className='text-white text-2xl hover:text-yellow-200 hover:translate-x-1 transition duration-300'>
            Home
          </h1>
        </Link>
      </header>
  )
}

export default HomeBtn;