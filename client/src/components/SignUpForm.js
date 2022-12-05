import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignUpForm({ setUser }) {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    function handleSignUpSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        setErrors([])
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation
            }),
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
            <form onSubmit={handleSignUpSubmit}>
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
                <label>
                    Password confirmation:
                </label>
                <input
                    type="text"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <br></br>
                <button type="submit">
                    {isLoading ? "Loading" : "Sign Up!"}
                </button>
                {errors.map((err) => (
                    <p key={err}>{err}</p>
                ))}
            </form>
        </div>
    )
}

export default SignUpForm