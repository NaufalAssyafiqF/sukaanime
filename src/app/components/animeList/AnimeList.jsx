
import React from 'react'
import ListSwitch from './listSwitch'
import ListSide from './ListSide'

function AnimeList() {
    
    

    return (
        <div className='px-20 mt-10 text-white mb-10'>
            <div className='flex'>
                <ListSwitch/>
                <ListSide/>
            </div>
        </div>
    )
}

export default AnimeList