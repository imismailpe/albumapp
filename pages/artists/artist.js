import Link from 'next/link';
import styles from './artist.module.css';
const Artist = ({artist = {}}) => {
    if(Object.keys(artist).length === 0){
        return null;
    }
    return (
        <Link href={{
            pathname: `/albums/[userid]`,
            query: { userid: artist.id}
        }}>
            <div className={styles.artist}>
                <h4 className={styles.artistName}>{artist.name}</h4>
                <div className={styles.artistEmail}>Email: {artist.email}</div>
                <div className={styles.artistPhone}>Phone: {artist.phone}</div>
                <div className={styles.artistCompany}>Company: <Link href={`https://${artist.website}`}>{artist.website}</Link></div>
            </div>
        </Link>
    )
}

export default Artist;