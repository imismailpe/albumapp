import Image from 'next/image';
import Link from 'next/link';
import styles from './album.module.css';
const Album = ({ album, covers = [] }) => {
    if (covers.length === 0) {
        return null;
    }
    return (
        <Link href={{
            pathname: `/albums/photos`,
            query: { albumid: album.id}
        }}>
            <div className={styles.album} >
                <div className={styles.albumCover}><Image src={covers[0].thumbnailUrl} width={150} height={150} /></div>
                <div className={styles.albumName}><h4>{album.title}</h4></div>
            </div>
        </Link>
    )
}
export default Album;