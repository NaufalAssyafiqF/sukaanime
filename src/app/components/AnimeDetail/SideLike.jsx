import Link from 'next/link'
import React from 'react'

async function SideLike({ animeData2 }) {

    return (
        <div className='w-[30%]  flex flex-col gap-y-3'>
            <h1 className='border-l-4 border-primary ps-2 text-xl font-semibold mb-3'>You Might Like...</h1>
            {animeData2?.map((data) => (
                <Link href={`/anime/${data.mal_id}`} key={data.mal_id}>
                    <div className='overflow-hidden'>
                        <div className="bg-cover bg-center w-[full] h-[12rem] rounded-md relative" style={{ backgroundImage: `url('${data.images.webp.image_url}')` }}>
                            <div className='absolute top-0 left-0 bg-gradient-to-t from-black w-full h-full rounded-md'></div>
                            <h1 className='absolute bottom-4 left-4'>{data.title}</h1>
                            <h1 className='bg-red-600 absolute top-2 right-2 px-1 rounded-lg text-sm'>{data.episodes} Eps</h1>
                            <h1 className='bg-yellow-600 absolute top-2 left-2 px-1 rounded-lg text-sm'>Score: {data.score}</h1>
                        </div>

                    </div>
                </Link>
            ))}
        </div>
    )
}

export default SideLike