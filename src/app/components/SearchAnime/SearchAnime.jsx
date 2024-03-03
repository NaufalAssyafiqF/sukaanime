"use client"
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function SearchAnime() {
    const params = useParams()
    const [animeData, setAnimeData] = useState([]);
    const decodedQuery = decodeURIComponent(params.value);

    useEffect(() => {
        async function fetchData() {
            if (!params) return;
            
            const response = await fetch(`https://api.jikan.moe/v4/anime?limit=24&q=${params.value}`);
            const anime = await response.json();
            setAnimeData(anime.data || []);
        }

        fetchData();
    }, []); 
    return (
        <div className='mx-20 text-white mt-5 mb-10'>
            <h1 className='text-2xl my-5'>Search Results From: {decodedQuery}</h1>
            <div className='flex flex-wrap gap-x-16 gap-y-5'>
                {animeData?.map((data) => (
                    <Link href={`/anime/${data.mal_id}`} key={data.mal_id}>
                    <div className='max-w-[15rem]'>
                        <div className='w-[15rem] h-[20rem] bg-cover' style={{ backgroundImage: `url(${data.images.webp.image_url})` }}></div>
                        <h3 className='text-sm text-slate-400 pt-2'>{data.season == null ? 'Unknown' : data.season}, {data.year}</h3>
                        <h1 className='font-semibold'>{data.title}</h1>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SearchAnime