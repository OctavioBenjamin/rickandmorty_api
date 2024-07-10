import axios from "axios";
import { useEffect, useState } from "react";
import { type Location } from "../../types/location";

function Locations() {
    const [locations, setLocations] = useState<Location[]>([])

    const baseurl = "https://rickandmortyapi.com/api/location"

    useEffect(() => {
        getLocation()
    }, [])

    async function getLocation(queries = "") {
        const { data } = await axios.get(`${baseurl}?${queries}`)
        setLocations(data.results)
    }

    return (
        <>
            <h2>Locations</h2>

            <table>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Dimension</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        locations && locations.map((l: Location) => (
                            <tr key={l.id}>
                                <th scope="row">{l.name}</th>
                                <th>{l.type}</th>
                                <th>{l.dimension}</th>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </>
    );
}

export default Locations;