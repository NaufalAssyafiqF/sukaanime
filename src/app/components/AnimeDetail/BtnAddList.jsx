"use client"
import React from 'react'

function BtnAddList({malId, score, title, image_url}) {

    const handleAddToList = () => {
        // Simpan data ke localStorage
        const existingData = JSON.parse(localStorage.getItem('localDataAnimelist')) || [];

        const isExist = existingData.some(data => data.mal_id === malId);
        if (isExist) {
            alert('Anime already exist in list');
            return;
        }

        existingData.push({ mal_id: malId, title: title, score: score, image_url: image_url });
        localStorage.setItem('localDataAnimelist', JSON.stringify(existingData));
        alert('Anime added to list');
    };

    return (
        <div className='flex justify-between'>
            <button className='px-5 py-2 mt-3 rounded-sm bg-primary text-xl hover:brightness-110 transition ease-in-out' onClick={handleAddToList}>Add to list +</button>
        </div>
    )
}

export default BtnAddList