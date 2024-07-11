import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../Pagination"; // Ajusta la ruta según sea necesario
import { type Episode } from "../../types/episodes";
import "./Episodes.css"

function Episodes() {
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    const [lastPage, setLastPage] = useState(0)


    const baseurl = "https://rickandmortyapi.com/api/episode";

    useEffect(() => {
        getEpisodes();
    }, [page, query]);

    async function getEpisodes() {
        const url = query ? `${baseurl}?name=${query}` : `${baseurl}?page=${page}`;
        const { data } = await axios.get(url);
        setLastPage(data.info.pages)
        setEpisodes(data.results);
        console.log(url);
    }

    // Actualiza el estado de la query según lo que el usuario ingrese.
    function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
        setQuery(event.target.value);
    }

    // Cambia la página actual, asegurándose de que la nueva página sea mayor que 0.
    function handlePageChange(newPage: number) {
        if (newPage > 0) {
            setPage(newPage);
        }
    }

    return (
        <div className="episodes-container">

            <h2>List of Episodes</h2>

            <label htmlFor="input-search">Search a Episode</label>
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
                        <th scope="col">Episode</th>
                        <th scope="col">Name</th>
                        <th scope="col">Air Date</th>
                        {/* <th scope="col">Characters</th> */}
                    </tr>
                </thead>
                <tbody className="tbody">
                    {episodes && episodes.map((e: Episode) => (
                        <tr key={e.id}>
                            <th scope="row">{e.episode}</th>
                            <th>{e.name}</th>
                            <th>{e.air_date}</th>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Pagination currentPage={page} onPageChange={handlePageChange} lastPage={lastPage}/>
        </div>
    );
}

export default Episodes;
