export const fetchAlbumsForUser = async (userid) => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userid}`);
    const data = await result.json();
    return data;
}
export const fetchData = async (url) => {
    const result = await fetch(url);
    const data = await result.json();
    return data;
}
export const fetchPhotosForAlbum = async (albumid) => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumid}`);
    const data = await result.json();
    return data;
}