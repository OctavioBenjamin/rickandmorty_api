import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <div className="navbar-container">
                <ul className="navbar">
                    <li className="nav-item">
                        <Link to="/">Characters</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/locations">Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/episodes">Episodes</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default NavBar;