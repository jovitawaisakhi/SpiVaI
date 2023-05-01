export interface Artist{
    name: string,
    image: string,
    albums: Album | null
}

export interface Album{
    id: string,
    name: string,
    image: string,
    tracks: Tracks | null
}

export interface Tracks{
    id: string,
    name: string,
    preview_url: string
}

