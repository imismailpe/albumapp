import Link from 'next/link';
import styles from './artist.module.css';
const Artist = (props) => {
    return (
        <Link href={{
            pathname: `/albums`,
            query: { artistid: props.artist.id}
        }}>
            <div className={styles.artist}>
                <h4 className={styles.artistName}>{props.artist.name}</h4>
                <div className={styles.artistEmail}>Email: {props.artist.email}</div>
                <div className={styles.artistPhone}>Phone: {props.artist.phone}</div>
                <div className={styles.artistCompany}>Company: <Link href={`https://${props.artist.website}`}>{props.artist.website}</Link></div>
            </div>
        </Link>
    )
}
export default Artist;