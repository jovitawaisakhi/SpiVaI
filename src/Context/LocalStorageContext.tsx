import React, { ReactNode, useEffect, useState } from "react"
import { createContext } from "react"

interface favorite{
    fav: string[],
    setFav: React.Dispatch<React.SetStateAction<string[]>>
}

interface Provider{
    children: ReactNode
}

export const UseFavoriteContext = createContext<favorite>({
    fav: [],
    setFav: ()=>{}
})


export const FavProvider:React.FC<Provider> = ({children})=> {
    
    let [fav, setFav] = useState(()=>{
        let localStorageValue = localStorage.getItem("fav");
        
        if(localStorageValue === null){
            return []
        }else{
            return JSON.parse(localStorageValue)
        }
    });
    
    useEffect(()=>{
        // to do
        localStorage.setItem("fav", JSON.stringify(fav));
    }, [fav])
    
    return <UseFavoriteContext.Provider value={{fav, setFav}}> {children} </UseFavoriteContext.Provider>
}