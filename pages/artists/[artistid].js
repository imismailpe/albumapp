import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Artist from "./artist";
import styles from './index.module.css';

const AnyArtist = () => {
    const router = useRouter();
    const [artist, setartist] = useState({ name: 'test', website: '' });
    const [loading, setloading] = useState(true);
    const artistid = router.query.artistid;
    const fetchArtist = async () => {
        setloading(true);
        const result = await fetch(`https://jsonplaceholder.typicode.com/users/${artistid}`);
        const data = await result.json();
        setartist(data);
        setloading(false);
    }
    useEffect(() => {
        if(artistid){
            fetchArtist();
        }
    }, [artistid]);
    return (
        loading ? 'loading' : <div className={styles.artistGrid}><Artist artist={artist} /></div>
    )
}

export default AnyArtist;