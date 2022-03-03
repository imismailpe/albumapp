import { useEffect, useState } from "react";
import AlbumList from "./albumList";
import styles from './index.module.css';

const Albums = () => {
    const [albumlist, setalbumlist] = useState([]);
    const [coverlist, setcoverslist] = useState([]);
    const fetchAlbums = async () => {
        const result = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await result.json();
        setalbumlist(data);
    }
    const fetchAlbumCovers = async () => {
        const result = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await result.json();
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
// export async function getStaticProps() {
//     //static generation
//     const result = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await result.json();
//     return {
//         props: {
//             userlist: data
//         }
//     }
// }
export default Albums;