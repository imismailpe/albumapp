import Image from "next/image";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import styles from './index.module.css';

const AlbumPhotos = ()=>{
    const router = useRouter();
    const [loading, setloading] = useState(true);
    const [photos, setphotos] = useState([]);
    const [currentPhoto, setcurrentPhoto] = useState('/');
    const albumid=router.query.albumid;
    const fetchPhotos = async ()=>{
        const result = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumid}`);
        const data = await result.json();
        setphotos(data);
        setloading(false);
        setcurrentPhoto(data[0].url);
    }
    useEffect(()=>{
        if(albumid){
            fetchPhotos();
        }
    },[]);
    return(
        loading? 'Loading..' 
        :<div className={styles.photoContainer}>
        <div className={styles.currentPhoto}><Image src={currentPhoto} width={300} height={300} /></div>
        <div className={styles.photoGrid}>
            {
                photos.map(photo => <Image key={photo.id} src={photo.url} 
                    width={150} height={150}
                    layout={'fixed'}
                     onClick={()=> setcurrentPhoto(photo.url)} />)
            }
        </div>
        </div>
    )
}
export default AlbumPhotos;