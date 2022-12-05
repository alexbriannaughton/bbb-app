import { useState } from "react"
import LoginForm from "./components/LoginForm"
import SignUpForm from "./components/SignUpForm"

function LoginPage({ setUser }) {

    const [showLogin, setShowLogin] = useState(true)

    return (
        <div>
            {showLogin ? (
                <>
                    <LoginForm
                        setUser={setUser}
                    />
                    <p>don't have an account?</p>
                    <button onClick={() => setShowLogin(false)}>sign up!</button>
                </>
            ) : (
                <>
                    <SignUpForm
                        setUser={setUser}
                    />
                    <p>already have an account?</p>
                    <button onClick={() => setShowLogin(true)}>log in</button>
                </>
            )}
        </div>
    )
}

export default LoginPage