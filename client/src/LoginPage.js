import { useState } from "react"
import LoginForm from "./components/LoginForm"
import SignUpForm from "./components/SignUpForm"

function LoginPage({ setUser, setUserFavorites, user }) {

    const [showLogin, setShowLogin] = useState(true)

    return (
        <div>
            {showLogin ? (
                <div id="LoginFlex">
                    <LoginForm
                        setUser={setUser}
                        setUserFavorites={setUserFavorites}
                        user={user}
                    />
                    <div id="signup">
                        <p>don't have an account?</p>
                        <button onClick={() => setShowLogin(false)}>sign up!</button>
                    </div>
                </div>
            ) : (
                <div id="LoginFlex">
                    <SignUpForm
                        setUser={setUser}
                    />
                    <div id="signup">
                        <p>already have an account?</p>
                        <button onClick={() => setShowLogin(true)}>log in</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default LoginPage