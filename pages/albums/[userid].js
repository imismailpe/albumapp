import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { fetchAlbumsForUser, fetchData } from "../../utils/functions";
import AlbumList from "./albumList";
import styles from './index.module.css';

const AnyAlbum = () => {
    const router = useRouter();
    const [albumlist, setalbumlist] = useState([]);
    const [coverlist, setcoverlist] = useState([]);
    const [loading, setloading] = useState(true);
    const userid = router.query.userid;
    const getAlbums = async () => {
        const data = await fetchAlbumsForUser(userid);
        setalbumlist(data);
    }
    const getCovers = async () => {
        setloading(true);
        const data = await fetchData('https://jsonplaceholder.typicode.com/photos');
        setcoverlist(data);
        setloading(false);
    }
    useEffect(() => {
        if (userid) {
            getAlbums();
            getCovers();
        }
    }, [userid]);
    return (
        loading ? 'loading'
            : <div className={styles.albumGrid}>
                <AlbumList list={albumlist} covers={coverlist} />
            </div>
    )
}
export async function getStaticProps() {
    //static generation
    const albumlist = await fetchData(`https://jsonplaceholder.typicode.com/albums`);
    const coverlist = await fetchData('https://jsonplaceholder.typicode.com/photos');
    return {
        props: {
            albumlist: albumlist,
            coverlist: coverlist
        }
    }
}
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const data = await fetchData('https://jsonplaceholder.typicode.com/users');

    // Get the paths we want to pre-render based on posts
    const paths = data.map((user) => ({
        params: { userid: user.id.toString() },
    }))
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}
export default AnyAlbum;