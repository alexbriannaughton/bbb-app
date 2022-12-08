import getToilets from "./components/getToilets"
import DeleteButton from "./components/DeleteButton"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useSound from "use-sound"
import sinkRunning from "./audio/sink-running.mp3"

function MirrorPage({ user, setUser, userReviews, setUserReviews }) {

    // const [userReviews, setUserReviews] = useState()
    // const [isLoaded, setIsLoaded] = useState(false)

    const navigate = useNavigate()

    function handleDelete(e, deletedReview) {
        e.stopPropagation()
        fetch(`/reviews/${deletedReview.id}`, { method: "DELETE" }).then((r) => {
            if (r.ok) {
                fetch("/me").then((r) => {
                    if (r.ok) {
                        r.json().then((user) => setUser(user));
                    }
                });
            }
        })
    }

    function renderMirrorPage() {
        if (!user) {
            return (
                <h1>You need to log in to see your mirror page!</h1>
            )
        } else {
            return (
                <div>
                    <div id="mirrorDiv">
                        <div id="userInfo">
                            <h2>Hello, {user.username}!<br></br> You've written {user.reviews_total} reviews.</h2>
                            <h3>You tend to have a {user.average_experience} star experience at the bathroom.</h3>
                            <h4>You give an average cleanliness score of {user.average_cleanliness}.</h4>
                            <h4>You give an average function score of {user.average_function}.</h4>
                            <h4>You give an average style score of {user.average_style}.</h4>
                        </div>
                    </div>

                    {userReviews && userReviews.map((review) => (
                        <div
                            onClick={(e) => navigate(`/bathrooms/${review.bathroom_id}`)}
                            className="review-div">
                            <p>{review.date}:</p>
                            <p>Description: {review.description}</p>
                            <p>Cleanliness: <br />{review.cleanliness}</p>
                            <p>Cleanliness Rating: {getToilets(review.cleanliness_rating)}</p>
                            <p>Function: <br />{review.function}</p>
                            <p>Function Rating: {getToilets(review.function_rating)}</p>
                            <p>Style: <br />{review.style}</p>
                            <p>Style Rating: {getToilets(review.style_rating)}</p>
                            <p>Final Score: {review.average_score}/5</p>
                            <button onClick={(e) => handleDelete(e, review)}>
                                Delete
                            </button>
                        </div>
                    ))}

                </div>
            )
        }
    }

    return (
        <>
            {renderMirrorPage()}
        </>
    )

}

export default MirrorPage