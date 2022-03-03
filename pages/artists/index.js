import { useEffect, useState } from "react";
import Artist from "./artist";
import styles from './index.module.css';

const Artists = (props) => {
    const [userlist, setuserlist] = useState([]);
    const fetchUsers = async () => {
        const result = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await result.json();
        setuserlist(data);
    }
    useEffect(() => {
        //client side fetching
        fetchUsers();
    }, []);
    return (
        <div className={styles.artistGrid}>
            {
                userlist.map(user => <Artist key={user.id} artist={user} />)
            }
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
export default Artists;