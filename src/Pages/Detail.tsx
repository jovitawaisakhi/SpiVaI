import { useParams } from "react-router-dom";
import { GetAllAlbum } from "../Query/GetAllComponent";
import { useQuery } from "@apollo/client";
import { Album } from "../lib/Interface";
import { Tracks } from "../lib/Interface";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Favorite } from "./Favorite";
import { UseFavoriteContext } from "../Context/LocalStorageContext";
import NavBar from "../Components/NavigationBar";

export function Detail(){
    let {id} = useParams();
    let {fav, setFav} = useContext(UseFavoriteContext)
    console.log(id)

    const {loading, error, data} = useQuery(GetAllAlbum, {
        variables : {
            id : id
        }
    });

    if(loading) return <h1 className="font-serif flex justify-center">Loading</h1>
    if(error) return <h1>ERROR</h1>

    console.log(data)
    

    const onClick = () => {
        if(fav.some((id_Avail)=> id_Avail == id)){
            
        }
        else if(id != null){
            setFav([...fav, id]);
        }
    }

    return (
        <div className="min-w-full bg-black mr-10">
            <NavBar/>
            <img className="p-10 object-scale-down" src={data.album.image} alt="" />
            <div className="place-items-start flex flex-col justify-center px-20 text-left min-h-screen">
                <div className="flex flex-row justify-between py-4">
                    <p className="text-white font-bold text-2xl mr-5">{data.album.name}</p>
                    <button onClick={onClick} className="text-white border-2 rounded px-5">ADD</button>
                </div>
                {
                    data.album.tracks.map((track:Tracks)=>{
                        // console.log(track)
                        return(
                            <div className="text-xs text-white py-3 font-serif" key={track.id}>- {track.name}</div>
                        )
                    })

                }

            </div>
        </div>
    )
}



