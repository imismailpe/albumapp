import Album from "./album"

const AlbumList = ({covers = [], list = []}) => {
    return(
        list.map(album => {
            const albumcovers = covers.filter(cover =>album.id === cover.albumId);
            return <Album key={album.id} album={album} covers={albumcovers} />
        })
    )
}
export default AlbumList;