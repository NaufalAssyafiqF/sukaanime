"use client"
import React, { useEffect, useState } from 'react'
import { fetchAnimeData } from '@/lib/apiDataSwitch';
import Link from 'next/link';

function ListSwitch() {

    const [animeData, setAnimeData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('rekomend');

    const handleCategoryClick = async (category) => {
        setSelectedCategory(category);
        const data = await fetchAnimeData(category);
        setAnimeData(data);
    };

    useEffect(() => {
        async function fetchData() {
            const data = await fetchAnimeData(selectedCategory); 
            setAnimeData(data); 
        }

        fetchData();
    }, []);

    return (
        <div className='w-[70%]'>
            <div className='mb-3 text-lg font-semibold'>
                <ul className='flex pb-2'>
                    <li onClick={() => handleCategoryClick('rekomend')} className={selectedCategory === 'rekomend' ? 'me-10 cursor-pointer text-primary border-b-4 border-primary' : 'me-10 cursor-pointer'}>Recomend</li>
                    <li onClick={() => handleCategoryClick('airing')} className={selectedCategory === 'airing' ? 'me-10 cursor-pointer text-primary border-b-4 border-primary' : 'me-10 cursor-pointer'}>Airing Now</li>
                    <li onClick={() => handleCategoryClick('populer')} className={selectedCategory === 'populer' ? 'me-10 cursor-pointer text-primary border-b-4 border-primary' : 'me-10 cursor-pointer'}>Populer</li>
                </ul>
            </div>
            <div className='flex flex-wrap gap-5'>
                {animeData?.map((data) => (
                    <div className='max-w-[15rem]' key={data.mal_id}>
                        <Link href={`/anime/${data.mal_id}`}><div className='w-[15rem] h-[20rem] bg-cover' style={{ backgroundImage: `url(${data.images.webp.image_url})` }}></div></Link>
                        
                        <h3 className='text-sm text-slate-400 pt-2'>{data.season == null ? 'Unknown' : data.season}, {data.year}</h3>
                        <h1 className='font-semibold'>{data.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}



export default ListSwitch