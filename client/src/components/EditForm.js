import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RatingButton from "./RatingButton";

function EditForm( {showEditForm, setShowEditForm, currentReview}) {

    //react knows what this is
    console.log(currentReview.description)

    const [date, setDate] = useState(new Date())
    const [reviewDescription, setReviewDescription] = useState(currentReview.description)
    const [cleanliness, setCleanliness] = useState(currentReview.cleanliness)
    const [cleanlinessRating, setCleanlinessRating] = useState(null)
    const [bathroomFunction, setBathroomFunction] = useState(currentReview.function)
    const [bathroomFunctionRating, setBathroomFunctionRating] = useState(null)
    const [style, setStyle] = useState(currentReview.style)
    const [styleRating, setStyleRating] = useState(null)

    const [errors, setErrors] = useState([])
    
    //but doesn't know what this is
    console.log(reviewDescription)
    
    function handleSubmit(e) {
        e.preventDefault()
        console.log('submitted')
    }

    return (
        <>
            

            {showEditForm ?

                <div>
                    <div className="review-form-div">
                        <form onSubmit={handleSubmit}>
                            <h1 onClick={(e) => setShowEditForm(false)} className="x-button">x</h1>
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
                </div>

                : null}
        </>
    )
}

export default EditForm