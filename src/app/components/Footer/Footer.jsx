import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
        <div className='w-full bg-gray-900 h-[12rem] flex justify-between px-20 py-10'>
            <div>
                <Image src='/images/logo.png' width={120} height={120} className='' alt='logo' />
            </div>
            <div>
                <ul className='flex gap-8 text-white text-base font-semibold'>
                    <li>Homepage</li>
                    <li>Search</li>
                    <li>Profile</li>
                    <li>Categories</li>
                </ul>
            </div>
            <div>
                <h1 className='text-white'>
                    copyright © 2024 All right reserve |<br />this website is build with <br /> <span className='text-yellow-300'>NextJS</span> & <span className='text-blue-600 font-semibold'>Tailwind</span>
                </h1>
            </div>
        </div>
    )
}

export default Footer