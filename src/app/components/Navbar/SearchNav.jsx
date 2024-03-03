"use client"
// import React from 'react'
// import { IoSearch } from "react-icons/io5";

// function SearchNav() {
    
//     return (
//         <div className='pe-5 relative'>
//             <IoSearch className='absolute top-[0.27rem] left-2' />
//             <input className="rounded-full  pl-7 bg-basescreen border-2 border-white placeholder:text-white  placeholder:ms-2" placeholder="Search Anime..." type="text" name="search" />
//         </div>
//     )
// }

// export default SearchNav

import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { useRouter } from 'next/navigation';

function SearchNav() {
    const router = useRouter();
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search-anime/${searchValue}`);
    };

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className='pe-5 relative'>
            <IoSearch className='absolute top-[0.27rem] left-2' />
            <input 
                className="rounded-full  pl-7 bg-basescreen border-2 border-white placeholder:text-white  placeholder:ms-2" 
                placeholder="Search Anime..." 
                type="text" 
                name="search" 
                value={searchValue}
                onChange={handleChange}
            />
        </form>
    );
}

export default SearchNav;