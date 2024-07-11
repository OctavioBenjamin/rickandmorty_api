import axios from "axios";
import { useEffect, useState } from "react";
import { type Character } from "../../types/character";
import Pagination from "../Pagination";
import "./Characters.css"

function Characters() {
    const [characters, setCharacters] = useState<Character[]>([])
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    const [lastPage, setLastPage] = useState(0)
    const baseurl = "https://rickandmortyapi.com/api/character"

    useEffect(() => {
        getCharacters()
    }, [page, query])

    async function getCharacters() {
        const url = query ? `${baseurl}?name=${query}` : `${baseurl}?page=${page}`;
        const { data } = await axios.get(url);
        setLastPage(data.info.pages)
        setCharacters(data.results);
        console.log(data);
        
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
        <div className="characters-container">

            <h2>List of Characters</h2>

            <label htmlFor="input-search">Search a Character</label>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleQueryChange}
                className="input-search"
                id="input-search"
            />

            <table className="table">
                <thead className="thead">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Origin</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    {
                        characters && characters.map((c: Character) => (
                            <tr key={c.id}>
                                <th scope="row"><img className="image-character" src={c.image} alt={`${c.name} Image`} /></th>
                                <th>{c.name}</th>
                                <th>{c.status}</th>
                                <th>{c.gender}</th>
                                <th>{c.origin.name}</th>
                            </tr>
                        ))
                    }

                </tbody>
            </table>

            <Pagination currentPage={page} onPageChange={handlePageChange} lastPage={lastPage}/>
        </div>
    );
}

export default Characters;