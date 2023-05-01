import { Link } from "react-router-dom"
import { Album } from "../lib/Interface"


export function AllAlbum({album}:{album:Album}){
    return (
        <div>
            <AlbumImage album={album} source={album.image}/>
            <p className="text-white text-sm font-serif flex justify-center">{album.name}</p>
        </div>
    )
}

export function AlbumImage({album, source}:{album:Album, source:string}){
    return <Link to={`/Detail/${album.id}`}><img src={source} alt="" className="p-8"/></Link>
}

