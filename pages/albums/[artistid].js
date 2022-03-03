import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import AlbumList from "./albumList";
import styles from './index.module.css';

const AnyAlbum = () => {
    const router = useRouter();
    const [albumlist, setalbumlist] = useState([]);
    const [coverlist, setcoverlist] = useState([]);
    const [loading, setloading] = useState(true);
    const artistid = router.query.artistid;
    const fetchAlbums = async () => {
        const result = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${artistid}`);
        const data = await result.json();
        setalbumlist(data);
    }
    const fetchCovers = async () => {
        setloading(true);
        const result = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await result.json();
        setcoverlist(data);
        setloading(false);
    }
    useEffect(() => {
        if (artistid) {
            fetchAlbums();
            fetchCovers();
        }
    }, [artistid]);
    return (
        loading ? 'loading'
            : <div className={styles.albumGrid}>
                <AlbumList list={albumlist} covers={coverlist} />
            </div>
    )
}

export default AnyAlbum;