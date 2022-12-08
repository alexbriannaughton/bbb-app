import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RatingButton from "./RatingButton";

function ReviewForm({ rerenderPage, user, bathroomId }) {

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
                    r.json().then((newReview) => rerenderPage())
                } else {
                    r.json().then((err) => setErrors(err.errors))
                }
            })
    }

    return (
        <div className="review-form-div">
            <form onSubmit={handleSubmit}>
                <h3>Write your review:</h3>
                <label>Date:</label>
                <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                />
                <label>Description:</label><br />
                <textarea
                    type="text"
                    value={reviewDescription}
                    onChange={(e) => setReviewDescription(e.target.value)}
                /><br />
                <label>Cleanliness:</label><br />
                <textarea
                    type="text"
                    value={cleanliness}
                    onChange={(e) => setCleanliness(e.target.value)}
                /><br />
                <label>Cleanliness Rating:</label><br />
                <RatingButton
                    rating={cleanlinessRating}
                    setRating={setCleanlinessRating}
                /><br />
                <label>Function:</label><br />
                <textarea
                    type="text"
                    value={bathroomFunction}
                    onChange={(e) => setBathroomFunction(e.target.value)}
                /><br />
                <label>Function Rating:</label><br />
                <RatingButton
                    rating={bathroomFunctionRating}
                    setRating={setBathroomFunctionRating}
                /><br />
                <label>Style:</label><br />
                <textarea
                    type="text"
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                /><br />
                <label>Function Rating:</label><br />
                <RatingButton
                    rating={styleRating}
                    setRating={setStyleRating}
                /><br />
                <button type="submit">Submit</button>
                {errors.map((err) => (
                    <p key={err}>{err}</p>
                ))}
            </form>
        </div>
    )
}

export default ReviewForm