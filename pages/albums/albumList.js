import Album from "./album"

const AlbumList = (props) => {
    return(
        props.list.map(album => {
            const albumcovers = props.covers.filter(cover =>album.id === cover.albumId);
            return <Album key={album.id} album={album} covers={albumcovers} />
        })
    )
}
export default AlbumList;