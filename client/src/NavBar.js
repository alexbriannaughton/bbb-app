import { Link } from "react-router-dom"

function NavBar({ user, setUser }) {

    function handleLogoutClick() {
        if (user) {
            fetch("/logout", { method: "DELETE" }).then((r) => {
                if (r.ok) {
                    setUser(null)
                }
            })
        }
    }

    return (
        <div>
            <div id="HeaderTop">
                <Link id="navLogin" to="/login" onClick={handleLogoutClick}>
                    {user === null ? "Login" : "Logout"}
                </Link>
                <Link to="/">
                    <h1 id="BBBTitle">Better Bathroom Bureau</h1>
                    <h2 id="BBBSubtitle">helping people in Seattle find bathrooms around the city</h2>
                </Link>
                <Link to="/mirror" id="navAccount">Check your mirror</Link>
            </div>
            
            <div id="navbar">
                <Link to="/best">
                    Best Bathrooms
                </Link>
                
                <Link to="/new-bathroom">
                    Add New Bathroom
                </Link>
                <Link to="/our-mission">
                    Our Mission
                </Link>

            </div>
        </div>
    )
}

export default NavBar