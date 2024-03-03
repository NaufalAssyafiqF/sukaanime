"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";


function page() {
    const [animeList, setAnimeList] = useState([]);
    console.log(animeList);

    useEffect(() => {
        const storedData = localStorage.getItem('localDataAnimelist');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setAnimeList(parsedData);
        }
    }, []);

    const handleDeleteList = (malId) => {
        const updatedAnimeList = animeList.filter(anime => anime.mal_id !== malId);
        setAnimeList(updatedAnimeList);
        localStorage.setItem('localDataAnimelist', JSON.stringify(updatedAnimeList));
        alert('Anime deleted from list!');
    };

    return (
        <div className='min-h-screen'>
            <div className='px-20 py-10'>
                <h1 className='text-2xl font-semibold text-white border-l-4 border-primary px-2'>My Profile</h1>
                <div className='flex mt-5'>
                    <div className=' mt-5 w-[10%]'>
                        <div className='rounded-full overflow-hidden w-full'>
                            <img src="/images/gojo-profile.jpg" alt="profile" className='object-cover w-full' />
                        </div>
                    </div>

                    <div className='ms-5 text-white'>
                        <h1 className='text-2xl text-primary font-bold'>Gojo Satoruuu</h1>
                        <h1 className='font-medium'>My Status  : Iam Greatest Jujutsu Wizzard</h1>
                        <div className='flex gap-x-2 mt-5 items-center'>
                            <FaTwitter />
                            <h3>@twittersatoruuu_</h3>
                        </div>
                        <div className='flex gap-x-2 items-center'>
                            <AiFillInstagram />
                            <h3>@instagramgsatoruuu_</h3>
                        </div>
                        <div className='flex gap-x-2 items-center'>
                            <FaTelegramPlane />
                            <h3>@telegramgsatoruuu_</h3>
                        </div>
                    </div>
                </div>
                <h1 className='text-2xl font-semibold text-white border-l-4 border-primary px-2 mt-10'>My List Anime</h1>
                <div className='mt-5 flex flex-wrap gap-x-10 gap-y-8 min-h-[20rem]'>
                    {animeList.length === 0 ? (
                        <h1 className='text-white text-2xl font-semibold flex justify-center items-center w-full'>You dont have any list</h1>
                    ) : animeList.map((data) => (
                        <div className='w-[22%] h-[15rem] overflow-hidden rounded-lg relative' key={data.mal_id}>
                            <Link href={`/anime/${data.mal_id}`}>
                                <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: `url('${data.image_url}')` }}></div>

                                <div className='absolute top-0 left-0 bg-gradient-to-t from-black w-full h-full rounded-md '>
                                </div>
                                <h1 className='absolute bottom-4 left-4 text-white text-base font-medium'>{data.title}</h1>
                                <div className='absolute top-2 right-2 flex text-yellow-400  text-sm bg-gray-700 px-2 rounded-md items-center gap-x-1'>
                                    <FaStar />
                                    <h1 className=''>{data.score}</h1>
                                </div>
                            </Link>
                            <div className='absolute top-2 left-2 px-1 py-1 rounded-md bg-red-600 text-white hover:brightness-110'>
                                <FaTrashAlt onClick={()=>handleDeleteList(data.mal_id)}/>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default page