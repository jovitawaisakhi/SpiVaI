import NavBar from "../Components/NavigationBar";
import { useState } from "react";
import Home from "./Home";

export function SearchBar(){
    const [search, setSearch] = useState<string>("")

    return(
        <div className="bg-stone-300 min-h-screen">
            <NavBar/>
            <form className="py-6 flex justify-center mt-20">
                <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" className="flex border-2 border-black bg-white h-10 px-5 rounded-lg text-sm focus:outline-none items-center mr-4" />
                <button type="submit">SEARCH</button>
            </form>
            
            <Home search={search} />
            
        </div>
    )
}