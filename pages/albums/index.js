import { useEffect, useState } from "react";
import { fetchData } from "../../utils/functions";
import AlbumList from "./albumList";
import styles from './index.module.css';

const Albums = () => {
    const [albumlist, setalbumlist] = useState([]);
    const [coverlist, setcoverslist] = useState([]);
    const fetchAlbums = async () => {
        const data = await fetchData('https://jsonplaceholder.typicode.com/albums');
        setalbumlist(data);
    }
    const fetchAlbumCovers = async () => {
        const data = await fetchData('https://jsonplaceholder.typicode.com/photos');
        setcoverslist(data);
    }
    useEffect(() => {
        //client side fetching
        fetchAlbums();
        fetchAlbumCovers();
    }, []);
    return (
        <div className={styles.albumGrid}>
            <AlbumList list={albumlist} covers={coverlist} />
        </div>
    )
}
export default Albums;