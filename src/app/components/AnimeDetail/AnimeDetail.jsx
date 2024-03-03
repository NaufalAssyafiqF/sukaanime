"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import SideLike from './SideLike';
import BtnAddList from './BtnAddList';

function AnimeDetail() {
    const params = useParams()
    const [animeData, setAnimeData] = useState([]);
    const [animeData2, setAnimeData2] = useState([]);

    useEffect(() => {
        async function fetchData() {
            if (!params) return;

            const response = await fetch(`https://api.jikan.moe/v4/anime/${params.id}`);
            const anime = await response.json();
            setAnimeData(anime.data || []);

            const randomNumber = Math.floor(Math.random() * 10) + 2;
            const response2 = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=3&page=${randomNumber}`);
            const anime2 = await response2.json();
            setAnimeData2(anime2.data || []);
        }

        fetchData();
    }, []);
    return (
        <div className='mx-20 text-white my-10'>
            <div className='flex'>
                <div className='w-[25%] h-full rounded overflow-hidden relative'>
                    <img src={`${animeData.images?.jpg.image_url}`} alt="anime" className='object-cover w-full min-h-[28rem]' />
                    <div className='absolute top-0 left-1/3 bg-slate-900 px-2 rounded-b-md bg-opacity-80'>
                        <div className='flex text-yellow-500 text-lg justify-center'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                        <h1>{animeData.scored_by} Votes</h1>
                    </div>
                </div>
                <div className='w-[75%] px-5'>
                    <h1 className='text-3xl font-bold mb-1'>{animeData.title}</h1>
                    <div className='flex gap-x-2 mb-5'>
                        <h1>{animeData?.title_japanese} ||</h1>
                        <h1>{animeData?.title_english}</h1>
                    </div>
                    <h2 className='text-justify mb-5 max-h-[30%] overflow-scroll custom-scrollbar'>{animeData.synopsis}</h2>

                    <div className="flex w-full">
                        <div className="w-1/2">
                            <ul className='list-disc'>
                                <li className='table-row'>
                                    <span className="table-cell w-24">Type:</span>
                                    <span className="table-cell font-semibold">{animeData.type} Series</span>
                                </li>
                                <li className='table-row'>
                                    <span className="table-cell w-24">Studios:</span>
                                    <span className="table-cell font-semibold">{animeData.studios?.[0].name}</span>
                                </li>
                                <li className='table-row'>
                                    <span className="table-cell w-24">Date aired:</span>
                                    <span className="table-cell font-semibold">{animeData.aired?.string}</span>
                                </li>
                                <li className='table-row'>
                                    <span className="table-cell w-24">Status:</span>
                                    <span className="table-cell font-semibold">{animeData.status}</span>
                                </li>
                                <li className='table-row'>
                                    <span className="table-cell w-24">Genre:</span>
                                    {animeData.genres?.map((genre, index) => (
                                        <span key={genre.mal_id}>
                                            {genre.name}{index !== animeData.genres.length - 1 && ", "}
                                        </span>
                                    ))}
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2">
                            <ul className='list-disc'>
                                <li className='table-row'>
                                    <span className="table-cell w-24">Scores:</span>
                                    <span className="table- font-semibold">{animeData.score} / 10</span>
                                </li>
                                <li className='table-row'>
                                    <span className="table-cell w-24">Rating:</span>
                                    <span className="table-cell font-semibold">{animeData.rating}</span>
                                </li>
                                <li className='table-row'>
                                    <span className="table-cell w-24">Duration:</span>
                                    <span className="table-cell font-semibold">{animeData.duration}</span>
                                </li>
                                <li className='table-row'>
                                    <span className="table-cell w-24">Rank:</span>
                                    <span className="table-cell font-semibold">{animeData.rank}</span>
                                </li>
                                <li className='table-row'>
                                    <span className="table-cell w-24">Source:</span>
                                    <span className="table-cell font-semibold">{animeData.source}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <BtnAddList malId={animeData.mal_id} title={animeData.title} score={animeData.score} image_url={animeData.images?.jpg.image_url}/>


                </div>
            </div>
            <div className='flex mt-12'>
                <div className='w-[70%] h-[30rem]'>
                    <h1 className='border-l-4 border-primary ps-2 text-xl font-semibold mb-3'>Trailer {animeData.title}</h1>
                    {animeData.trailer?.embed_url == null ? <h1>Trailer not available</h1> : <iframe className='w-[95%] h-[30rem] rounded-sm mt-5' src={`${animeData.trailer?.embed_url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>}  
                </div>
                <SideLike animeData2={animeData2} />
            </div>

        </div>
    )
}

export default AnimeDetail