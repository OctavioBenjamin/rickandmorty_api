import axios from "axios";
import { useEffect, useState } from "react";
import { type Character } from "../../types/character";

function Characters() {
    const [characters, setCharacters] = useState<Character[]>([])

    const baseurl = "https://rickandmortyapi.com/api/character"

    useEffect(() => {
        getCharacters()
    }, [])

    async function getCharacters(queries = "") {
        const { data } = await axios.get(`${baseurl}?${queries}`)
        setCharacters(data.results)
    }

    return (
        <>
            <h2>Characters</h2>

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
        </>
    );
}

export default Characters;