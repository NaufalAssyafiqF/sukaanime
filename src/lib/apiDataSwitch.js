export async function fetchAnimeData(category) {

    const randomNumber = Math.floor(Math.random() * 10) + 2;
    let apiUrl = `https://api.jikan.moe/v4/top/anime?limit=15`;

    // Ubah URL API berdasarkan kategori yang dipilih
    if (category === 'airing') {
        apiUrl += '&filter=airing&page=1';
    } else if (category === 'populer') {
        apiUrl += '&filter=bypopularity&page=1';
    }else {
        apiUrl += `&page=${randomNumber}`;
    }

    const response = await fetch(apiUrl);
    const anime = await response.json();
    return anime.data;
}
