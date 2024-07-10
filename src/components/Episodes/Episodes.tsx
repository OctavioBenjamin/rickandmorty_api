import axios from "axios";
import { useEffect, useState } from "react";
import { type Episode } from "../../types/episodes";

function Episodes() {
    const [episodes, setEpisodes] = useState<Episode[]>([])
    const baseurl = "https://rickandmortyapi.com/api/episode"

    useEffect(() => {
        getLocation()
    }, [])

    async function getLocation(queries = "") {
        const { data } = await axios.get(`${baseurl}?${queries}`)
        setEpisodes(data.results)
    }

    return (
        <>
            <h2>Episodes</h2>

            <table>
                <thead>
                    <tr>
                        <th scope="col">Episode</th>
                        <th scope="col">Name</th>
                        <th scope="col">Air Date</th>
                        {/* <th scope="col">Characters</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        episodes && episodes.map((e: Episode) => (
                            <tr key={e.id}>
                                <th scope="row">{e.episode}</th>
                                <th scope="row">{e.name}</th>
                                <th scope="row">{e.air_date}</th>

                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </>
    );
}

export default Episodes;