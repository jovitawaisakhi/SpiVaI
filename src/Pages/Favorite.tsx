import { useContext } from "react";
import { UseFavoriteContext } from "../Context/LocalStorageContext";
import { GetAllComponent } from "../Query/GetAllComponent";
import { useQuery } from "@apollo/client";
import { Album } from "../lib/Interface";
import NavBar from "../Components/NavigationBar";


export function Favorite(){
    let {fav, setFav} = useContext(UseFavoriteContext)

    const {loading, error, data} = useQuery(GetAllComponent, {
        variables : {
            name : "NIKI"
        }
    });

    if(loading) return <h1 className="font-serif flex justify-center">Loading...</h1>
    if(error) return <h1>ERROR</h1>

    const albumIds = fav.map(id => id);

    
    return(
        <div className="bg-black min-h-screen">
            <NavBar/>
            <h1 className="p-10 text-white font-serif text-xl">Favorite List</h1>
            {
                data.artist.albums.filter((album:Album) => albumIds.includes(album.id)).map((album:Album)=>{
                    return (
                        <div className="bg-white flex m-5" key={album.id}>
                            
                            <div className="p-5 mr-10 ">{album.name}</div>
                            <button onClick={() => setFav(fav.filter((albumId: string) => albumId !== album.id))} className="m-3 border-2 rounded">DELETE</button>
                            
                        
                        </div>
                    );
                })
            }
        </div>
    )
    
}