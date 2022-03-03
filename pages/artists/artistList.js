import Artist from "./artist"

const ArtistList = (props) => {
    return(
        props.list.map(item => <Artist key={item.id} artist={item} />)
    )
}
export default ArtistList;