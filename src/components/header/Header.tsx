import NavBar from "../NavBar";
import "./Header.css"

function Header() {
    return ( 
        <div className="header-container">
            <h1 className="header-title">Rick And Morty Wiki</h1>
            <NavBar></NavBar>
        </div>
     );
}

export default Header;