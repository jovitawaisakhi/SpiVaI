import { GetAllComponent } from "../Query/GetAllComponent";
import { useQuery } from "@apollo/client";
import { Album } from "../lib/Interface";
import { AllAlbum } from "../Components/AllAlbum";
import NavBar from "../Components/NavigationBar";

export default function List(){
    const {loading, error, data} = useQuery(GetAllComponent, {
        variables : {
            name : "NIKI"
        }
    });

    if(loading) return <h1 className="font-serif flex justify-center">Loading...</h1>
    if(error) return <h1>ERROR</h1>

    console.log(data)
    
    return(
        <div>
            <NavBar/>
            <div className="bg-black flex p-2 flex grid grid-cols-3">
                {data.artist.albums.map((album:Album)=>{
                    // console.log(album)
                    return (
                        <AllAlbum key={album.id} album = {album}/>
                    )
                    }
                )}
            </div>

        </div>
    )
    
}

