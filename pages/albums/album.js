import Image from 'next/image';
import Link from 'next/link';
import styles from './album.module.css';
const Album = ({ album={}, covers = [] }) => {
    if (Object.keys(album).length === 0) {
        return null;
    }
    return (
        <Link href={{
            pathname: `/albums/photos/[albumid]`,
            query: { albumid: album.id}
        }}>
            <div className={styles.album} >
                <div className={styles.albumCover}>{covers.length > 0 ? <Image src={covers[0].thumbnailUrl} width={150} height={150} />: <p>No images</p>}</div>
                <div className={styles.albumName}><h4>{album.title}</h4></div>
            </div>
        </Link>
    )
}
export default Album;