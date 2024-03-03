import Link from 'next/link'
import React from 'react'

async function ListSideComponent({ titleCard, apiData, more }) {
    const response = await fetch(`https://api.jikan.moe/v4/${apiData}?limit=5`)
    const topAnime = await response.json()

    return (
        <div className='bg-gray-900'>
            <div className='flex justify-between px-2 mb-3 bg-gray-500'>
                <h1 className='font-semibold text-lg'>{titleCard}</h1>
                <Link href={`/more-anime/${more}`}><h3 className='flex items-center'>More</h3></Link>
            </div>
            <div className='text-sm'>
                {topAnime.data.map((data, index) => (
                    <Link href={`/anime/${data.mal_id}`} key={data.mal_id}>
                        <div className='flex mb-3'>
                            <h3 className='w-[5%] flex justify-center'>{index + 1}</h3>
                            <div
                                className='w-[30%] h-[10rem] bg-cover'
                                style={{ backgroundImage: `url(${data.images.webp.image_url})` }}></div>
                            <div className='w-[55%] ps-1'>
                                <h3 className='font-semibold'>{data.title}</h3>
                                <h4 className='text-yellow-400'><span className='text-yellow-400'>{data.score}</span> Scored</h4>
                                <h4 className='text-green-400'>{data.members} Members</h4>
                                <h4 className='text-blue-400'>{data.type}, {data.episodes}Eps</h4>
                            </div>
                            <div className='w-[10%] p-1'>
                                <h5 className=' bg-primary flex items-center justify-center text-white px-2 rounded-sm'>add</h5>
                            </div>

                        </div>
                    </Link>
                ))}


            </div>
        </div>
    )
}

export default ListSideComponent