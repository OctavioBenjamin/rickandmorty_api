/*
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
*/

export interface Character {
    id: number
    image: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: Origin
}

export interface Origin {
    name: string
    url: string
}
