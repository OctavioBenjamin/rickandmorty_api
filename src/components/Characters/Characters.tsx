import axios from "axios";
import { useEffect, useState } from "react";
import { type Character } from "../../types/character";
import Pagination from "../Pagination";

function Characters() {
    const [characters, setCharacters] = useState<Character[]>([])
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");

    const baseurl = "https://rickandmortyapi.com/api/character"

    useEffect(() => {
        getCharacters()
    }, [page, query])

    async function getCharacters() {
        const url = query ? `${baseurl}?name=${query}` : `${baseurl}?page=${page}`;
        const { data } = await axios.get(url);
        setCharacters(data.results);
        console.log(url);
        
    }

    //Actualiza el estado de la query según lo que el usuario ingrese.
    function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
        setQuery(event.target.value);
    }

    //Cambia la página actual, asegurándose de que la nueva página sea mayor que 0.
    function handlePageChange(newPage: number) {
        if (newPage > 0) {
            setPage(newPage);
        }
    }

    return (
        <>
            <h2>Characters</h2>

            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleQueryChange}
            />

            <table>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Specie</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Origin</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        characters && characters.map((c: Character) => (
                            <tr key={c.id}>
                                <th scope="row"><img src={c.image} alt={`${c.name} Image`} /></th>
                                <th>{c.name}</th>
                                <th>{c.status}</th>
                                <th>{c.species}</th>
                                <th>{c.gender}</th>
                                <th>{c.origin.name}</th>
                            </tr>
                        ))
                    }

                </tbody>
            </table>

            <Pagination currentPage={page} onPageChange={handlePageChange} />

        </>
    );
}

export default Characters;