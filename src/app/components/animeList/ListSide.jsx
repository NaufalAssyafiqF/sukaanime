import React from 'react'
import ListSideComponent from './ListSideComponent'

async function ListSide() {


    return (
        <div className='w-[31%] flex flex-col gap-5'>
            <ListSideComponent titleCard={"Top Anime"} apiData={"top/anime"} more={'topAnime'}/>
            <ListSideComponent titleCard={"Top Upcoming Anime"} apiData={"seasons/upcoming"} more={'upcoming'}/>
        </div>


    )
}

export default ListSide