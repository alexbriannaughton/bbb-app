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
        <div className="navbar">
            <Link
                to="/login"
                onClick={handleLogoutClick}
            >
                {user === null ? "Login" : "Logout"}
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