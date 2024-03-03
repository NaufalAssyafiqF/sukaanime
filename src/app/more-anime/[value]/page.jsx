"use client"
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function page() {
    const params = useParams()
    const [animeData, setAnimeData] = useState([]);
    const [page, setPage] = useState(1)
    
    function nextPage() {
        setPage(page + 1);
    }

    function prevPage() {
        setPage(page - 1);
    }

    async function fetchData(page) {
        let url = `https://api.jikan.moe/v4/top/anime?limit=24&page=${page}`;
        if (params.value !== "topAnime") {
            url += `&filter=${params.value}`;
        }
        const response = await fetch(url);
        const anime = await response.json();
        setAnimeData(anime || []);
    }

    useEffect(() => { 
        fetchData(page);
    }, [page, params.value]);

    return (
        <div className='px-20 mb-10 '>
            <h1 className='text-2xl font-semibold my-10 text-white border-l-4 border-primary px-2'>{params.value == "topAnime" ? "Top Anime" : `Top ${params.value} Anime`}</h1>
            <div className='flex flex-wrap gap-x-14 gap-y-5 text-white'>
                {animeData.data?.map((data,index) => (
                    <div className='max-w-[15rem]' key={index}>
                        <Link href={`/anime/${data.mal_id}`}><div className='w-[15rem] h-[20rem] bg-cover' style={{ backgroundImage: `url(${data.images.webp.image_url})` }}></div></Link>
                        <h3 className='text-sm text-slate-400 pt-2'>{data.season == null ? 'Unknown' : data.season}, {data.year}</h3>
                        <h1 className='font-semibold'>{data.title}</h1>
                    </div>
                ))}
            </div>
            <div className='flex gap-x-2 text-2xl font-semibold justify-center items-center text-white mt-10'>
                {page == 1 ? null : <FaArrowLeftLong className='hover:text-primary' onClick={() => prevPage()}/>}
                <h1>{animeData.pagination?.current_page} of {animeData.pagination?.last_visible_page} </h1>
                {page == animeData.pagination?.last_visible_page ? null : <FaArrowRightLong className='hover:text-primary' onClick={() => nextPage()}/>}
            </div>
        </div>
    )
}

export default page