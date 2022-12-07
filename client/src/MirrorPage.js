import getToilets from "./components/getToilets"
import DeleteButton from "./components/DeleteButton"
import { useEffect, useState } from "react"

function MirrorPage({ user }) {

    const [userReviews, setUserReviews] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    const [currentReview, setCurrentReview] = useState()

    useEffect(() => {
        if (user) {
            setUserReviews(user.reviews)
        }
        setIsLoaded(true)
    }, [user])


    function handleDelete(deletedReview) {
    
        fetch(`/reviews/${deletedReview.id}`, { method: "DELETE" }).then((r) => {
            if (r.ok) {
                const updatedReviews =
                userReviews.filter((review) => review.id!==deletedReview.id)
                setUserReviews(updatedReviews)
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
                    <h2>Hello, {user.username}!</h2>

                    <h3>Here are your reviews:</h3>

                    {userReviews && userReviews.map((review) => (
                        <div className="review-div">
                            <p>{review.date}:</p>
                            <p>Description: {review.description}</p>
                            <p>Cleanliness: <br />{review.cleanliness}</p>
                            <p>Cleanliness Rating: {getToilets(review.cleanliness_rating)}</p>
                            <p>Function: <br />{review.function}</p>
                            <p>Function Rating: {getToilets(review.function_rating)}</p>
                            <p>Style: <br />{review.style}</p>
                            <p>Style Rating: {getToilets(review.style_rating)}</p>
                            <p>Final Score: {review.average_score}/5</p>
                            <button onClick={(e) => handleDelete(review)}>
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
            {isLoaded ? renderMirrorPage() : <h2>loading...</h2>}
        </>
    )




}

export default MirrorPage