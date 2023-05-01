import {gql} from '@apollo/client'

export const GetAllComponent = gql`
    query artist($name:String!){
        artist(name:$name){
            name, image,
            albums{
                id, name, image,
                tracks{
                name, preview_url
                }
            }
        }
    }
`;

export const GetAllAlbum = gql`
    query album($id:String!){
        album(id:$id){
            name, image,
            tracks{
                name,preview_url
            }
        }
    }
`;