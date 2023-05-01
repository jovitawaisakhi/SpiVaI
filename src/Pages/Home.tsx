import { useQuery } from "@apollo/client";
import { GetAllComponent } from "../Query/GetAllComponent";

export default function Home({search}:{search:string}){
    console.log(search)
    const {loading, error, data} = useQuery(GetAllComponent, {
        variables : {
            name : search
        }
    });

    if(loading) return <h1 className="font-serif flex justify-center"></h1>
    if(error) return <h1></h1>

    console.log(data)
    
    return(
        <div className="flex justify-center mt-5 mb-8 min-w-screen">
            {
                data.artist == null ? <h1>ARTIST NOT IN THE LIST</h1> : <img className="w-1/3" src={data.artist.image} alt="" />
            }
        </div>
    )
    
}
