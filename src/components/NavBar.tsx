import "./NavBar.css"

function NavBar() {
    return (
        <>
            <div className="navbar-container">
                <ul className="navbar">
                    <li className="nav-item">
                        {/* <Link className="nav-link" to="/">Characters</Link> */}
                        <a href="/" className="nav-link">Characters</a>
                    </li>
                    <li className="nav-item">
                        {/* <Link  className="nav-link"to="/locations">Locations</Link> */}
                        <a href="/rickandmorty_api/locations" className="nav-link">Locations</a>
                    </li>
                    <li className="nav-item">
                        {/* <Link  className="nav-link"to="/episodes">Episodes</Link> */}
                        <a href="/rickandmorty_api/episodes" className="nav-link">Episodes</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default NavBar;