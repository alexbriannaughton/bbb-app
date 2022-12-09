import getToilets from "./components/getToilets"
import { useNavigate } from "react-router-dom"

function MirrorPage({ user, userReviews, setUserReviews, userFavorites, setUser }) {

    console.log(userReviews)
    const navigate = useNavigate()

    function handleDelete(e, deletedReview) {
        e.stopPropagation()
        fetch(`/reviews/${deletedReview.id}`, { method: "DELETE" }).then((r) => {
            if (r.ok) {
                const updatedReviews =
                    userReviews.filter((rev) => rev.id !== deletedReview.id)
                setUserReviews(updatedReviews)
                fetch("/me").then((r) => {
                    if (r.ok) {
                      r.json().then((user) => setUser(user));
                    }
                  })
            }
        })
    }

    function renderReviewStats() {
        if (user && userReviews && userReviews.length < 1) {
            return null
        } else {
            return (
                <>
                    <h3>You tend to have a {user.average_experience} star experience at the bathroom.</h3>
                    <h4>You give an average cleanliness score of {user.average_cleanliness}.</h4>
                    <h4>You give an average function score of {user.average_function}.</h4>
                    <h4>You give an average style score of {user.average_style}.</h4>
                </>
            )

        }
    }
    function renderFavorites() {
        if (user && userFavorites && userFavorites.length < 1) {
            return null
        } else if (userFavorites) {
            return (
                <>
                    <h2>Your favs!</h2>
                    <div id="user-fav-div">
                        {userFavorites[0].bathroom && userFavorites.map((fav) => (
                            <div
                                onClick={(e) => navigate(`/bathrooms/${fav.bathroom.id}`)}>
                                <p>{fav.bathroom.description} in {fav.bathroom.neighborhood}</p>
                            </div>
                        ))}
                    </div>
                </>
            )
        }
    }

    function renderMirrorPage() {
        if (!user) {
            return (
                <h1>You need to log in to see your mirror page!</h1>
            )
        } else {
            return (
                <div>

                    <div id="mirrorTopFlex">
                        <div id="mirrorDiv">
                            <div id="userInfo">
                                <h2>Hello, {user.username}!<br></br> You've written {user.reviews_total} reviews.</h2>
                                <h3>You tend to have a {user.average_experience} star experience at the bathroom.</h3>
                                <h4>You give an average cleanliness score of {user.average_cleanliness}.</h4>
                                <h4>You give an average function score of {user.average_function}.</h4>
                                <h4>You give an average style score of {user.average_style}.</h4>
                            </div>
                        </div>
                        
                        <div id="user-fav-div">
                        <h2>Your favorites:</h2>
                            {userFavorites && userFavorites.map((fav) => (
                                <div
                                    onClick={(e) => navigate(`/bathrooms/${fav.bathroom.id}`)}>
                                    <p className="OneFav">{fav.bathroom.neighborhood} - {fav.bathroom.description} </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id="AllMirrorReviews">
                    {userReviews && userReviews.map((review) => (
                        <div
                            onClick={(e) => navigate(`/bathrooms/${review.bathroom_id}`)}
                            className="mirror-review-div">
                            <p id="date">{review.date}:</p>
                            <p>Description: {review.description}</p>
                            <p>Cleanliness: <br />{review.cleanliness}</p>
                            <p class="MRRating">Cleanliness Rating: {getToilets(review.cleanliness_rating)}</p>
                            <p>Function: <br />{review.function}</p>
                            <p class="MRRating">Function Rating: {getToilets(review.function_rating)}</p>
                            <p>Style: <br />{review.style}</p>
                            <p class="MRRating">Style Rating: {getToilets(review.style_rating)}</p>
                            <p class="MRFinalScore">Final Score: {review.average_score}/5</p>
                            <button id="MRDelete" onClick={(e) => handleDelete(e, review)}>
                                Delete
                            </button>
                        </div>
                    ))}
                    </div>
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