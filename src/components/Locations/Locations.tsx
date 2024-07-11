import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import { Location } from "../../types/location";
import "./Locations.css"


function Locations() {
    const [locations, setLocations] = useState<Location[]>([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");

    const baseurl = "https://rickandmortyapi.com/api/location";

    useEffect(() => {
        getLocations();
    }, [page, query]);

    async function getLocations() {
        const url = query ? `${baseurl}?name=${query}` : `${baseurl}?page=${page}`;
        const { data } = await axios.get(url);
        setLocations(data.results);
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
            <div className="locations-container">
                <h2>List of Locations</h2>

                <label htmlFor="input-search">Search a Location</label>
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
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Dimension</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {locations && locations.map((loc: Location) => (
                            <tr key={loc.id}>
                                <th>{loc.name}</th>
                                <th>{loc.type}</th>
                                <th>{loc.dimension}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Pagination currentPage={page} onPageChange={handlePageChange} />
            </div>
    );
}

export default Locations;
