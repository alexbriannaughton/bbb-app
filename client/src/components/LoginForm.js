import { useState } from "react"
import { useNavigate } from "react-router-dom"

function LoginForm({ setUser }) {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    function handleLoginSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            setIsLoading(false)
            if (r.ok) {
                r.json().then((user) => setUser(user))
                navigate("/")
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleLoginSubmit}>
                <label>
                    Username:
                </label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <label>
                    Password:
                </label>
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit">
                    {isLoading ? "Loading..." : "Login"}
                </button>
                {errors.map((err) => (
                    <p key={err}>{err}</p>
                ))}
            </form>
        </div>
    )
}

export default LoginForm