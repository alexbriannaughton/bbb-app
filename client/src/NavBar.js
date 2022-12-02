import { Link } from "react-router-dom"

function NavBar(){
    return(
        <div className="navbar">
            <Link to="/login">
                Login
            </Link>
            <Link to="/best">
                Best Bathrooms
            </Link>
            <Link to="/">
                Home
            </Link>
            <Link to="/new-bathroom">
                Add New Bathroom
            </Link>
            <Link to="/our-mission">
                Our Mission
            </Link>
            
        </div>
    )
}

export default NavBar