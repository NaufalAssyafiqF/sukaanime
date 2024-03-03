import Image from 'next/image'
import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";

import SearchNav from './SearchNav';
import Link from 'next/link';

function Navbar() {
  return (
    <div className='flex text-white justify-between px-20 items-center pt-5'>
      <div>
        <Link href="/"><Image src='/images/logo.png' width={100} height={100} className='' alt='logo' /></Link>
      </div>
      <div className='flex items-center'>
        <SearchNav />
        <div>
          <Link href="/profile"><FaRegUserCircle size={30} /></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar