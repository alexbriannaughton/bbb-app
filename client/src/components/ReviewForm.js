import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RatingButton from "./RatingButton";

function ReviewForm({ rerenderPage, user, bathroomId, userReviews, setUserReviews }) {

    const [date, setDate] = useState(new Date())
    const [reviewDescription, setReviewDescription] = useState("")
    const [cleanliness, setCleanliness] = useState("")
    const [cleanlinessRating, setCleanlinessRating] = useState(null)
    const [bathroomFunction, setBathroomFunction] = useState("")
    const [bathroomFunctionRating, setBathroomFunctionRating] = useState(null)
    const [style, setStyle] = useState("")
    const [styleRating, setStyleRating] = useState(null)

    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault()

        fetch("/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                user_id: user === null ? 1 : user.id,
                bathroom_id: bathroomId,
                date: date.toDateString(),
                description: reviewDescription,
                cleanliness,
                cleanliness_rating: cleanlinessRating,
                function: bathroomFunction,
                function_rating: bathroomFunctionRating,
                style,
                style_rating: styleRating
            })
        })
            .then(r => {
                if (r.ok) {
                    r.json().then((newReview) => {
                     
                        setUserReviews([...userReviews, newReview])
                        rerenderPage()
                    })
                } else {
                    r.json().then((err) => setErrors(err.errors))
                }
            })
    }

    return (
        <div className="review-form-div">
            <form id="RF" onSubmit={handleSubmit}>
                {/* <h1 onClick={(e) => setShowReviewForm(false)} className="x-button">x</h1> */}
                <h2 id="RFTitle">Write your review:</h2>
                <div>
                    <label>Date:</label>
                    <DatePicker id="DatePicker"
                        selected={date}
                        onChange={(date) => setDate(date)}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        type="text"
                        value={reviewDescription}
                        onChange={(e) => setReviewDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label>Cleanliness:</label>
                    <textarea
                        type="text"
                        value={cleanliness}
                        onChange={(e) => setCleanliness(e.target.value)}
                    />
                </div>
                <div>
                    <label>Cleanliness Rating:</label>

                    <RatingButton
                        rating={cleanlinessRating}
                        setRating={setCleanlinessRating}
                    />
                </div>
                <div>
                    <label>Function:</label>
                    <textarea
                        type="text"
                        value={bathroomFunction}
                        onChange={(e) => setBathroomFunction(e.target.value)}
                    />
                </div>
                <div>
                    <label>Function Rating:</label>
                    <RatingButton
                        rating={bathroomFunctionRating}
                        setRating={setBathroomFunctionRating}
                    />
                </div>
                <div>
                    <label>Style:</label>
                    <textarea
                        type="text"
                        value={style}
                        onChange={(e) => setStyle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Function Rating:</label>
                    <RatingButton
                        rating={styleRating}
                        setRating={setStyleRating}
                    />
                </div>
                <button id="RFSubmit" type="submit">Submit</button>
                {errors.map((err) => (
                    <p key={err}>{err}</p>
                ))}
            </form>
        </div>
    )
}

export default ReviewForm