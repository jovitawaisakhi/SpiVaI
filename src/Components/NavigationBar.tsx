import { Link } from "react-router-dom"

const NavBar = ()=>{
    return(
        <nav className="min-w-full py-6 bg-black flex items-center">
            <a href="#" className="text-white ml-10 font-mono font-bold text-2xl">SpiVaI</a>

            <ul className="list-none flex flex-row justify-end items-center flex-1 mr-5">
                <Link to={`/`} className="text-white">
                    <li className="mr-2 font-serif">
                    Home
                    </li>
                </Link>
                <Link to={`/List`} className="text-white">
                    <li className="mr-2 font-serif">
                    List
                    </li>
                </Link>
                <Link to={`/Favorites`} className="text-white">
                    <li className="mr-2 font-serif">
                    Favorite
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar