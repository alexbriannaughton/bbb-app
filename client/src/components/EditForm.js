import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RatingButton from "./RatingButton";

function EditForm({ showEditForm, setShowEditForm, currentReview, rerenderPage }) {
    const [errors, setErrors] = useState([])
    const [hover, setHover] = useState(0);

    const [formData, setFormData] = useState({});
    const [cleanlinessRating, setCleanlinessRating] = useState(0)
    const [functionRating, setFunctionRating] = useState(0)
    const [styleRating, setStyleRating] = useState(0)

    useEffect(() => {
        setFormData({
            description: currentReview.description,
            cleanliness: currentReview.cleanliness,
            function: currentReview.function,
            style: currentReview.style
        })
        setCleanlinessRating(currentReview.cleanliness_rating)
        setFunctionRating(currentReview.function_rating)
        setStyleRating(currentReview.style_rating)
    }, [currentReview])

    function handleChange(event) {
        const name = event.target.name;
        let value = event.target.value;

        setFormData({
            ...formData,
            [name]: value,
        });
    }


    function handleSubmit(e) {
        e.preventDefault()

        const updateObj = {
            description: formData.description,
            cleanliness: formData.cleanliness,
            cleanliness_rating: cleanlinessRating,
            function: formData.function,
            function_rating: functionRating,
            style: formData.style,
            style_rating: styleRating
        }

        fetch(`/reviews/${currentReview.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateObj)
        }).then((r) => {
            if (r.ok) {
                setShowEditForm(false)
                rerenderPage()
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })

    }

    return (
        <>


            {showEditForm ?

                <div>
                    <div className="review-form-div">
                        <form onSubmit={handleSubmit}>
                            <h1 onClick={(e) => setShowEditForm(false)} className="x-button">x</h1>
                            <h3>Edit your review:</h3>
                            {/* <label>Date:</label>
                            <DatePicker
                                selected={date}
                                onChange={(date) => setDate(date)}
                                name="date"
                            /> */}
                            <label>Description:</label><br />
                            <textarea
                                type="text"
                                value={formData.description}
                                onChange={handleChange}
                                name="description"
                            /><br />
                            <label>Cleanliness:</label><br />
                            <textarea
                                type="text"
                                value={formData.cleanliness}
                                onChange={handleChange}
                                name="cleanliness"
                            /><br />
                            <label>Cleanliness Rating:</label><br />
                            <div>
                                {[...Array(5)].map((toilet, index) => {
                                    index += 1
                                    return (
                                        <button
                                            id="toilet-button"
                                            type="button"
                                            key={index}
                                            className={index <= (cleanlinessRating || hover) ? "hover-on" : "hover-off"}
                                            onClick={() => setCleanlinessRating(index)}
                                            onMouseEnter={() => setHover(index)}
                                            onMouseLeave={() => setHover(cleanlinessRating)}
                                        >
                                            <span>🚽</span>
                                        </button>
                                    )
                                })}
                            </div>
                            <label>Function:</label><br />
                            <textarea
                                type="text"
                                value={formData.function}
                                onChange={handleChange}
                                name="function"
                            /><br />
                            <label>Function Rating:</label><br />
                            <div>
                                {[...Array(5)].map((toilet, index) => {
                                    index += 1
                                    return (
                                        <button
                                            id="toilet-button"
                                            type="button"
                                            key={index}
                                            className={index <= (functionRating || hover) ? "hover-on" : "hover-off"}
                                            onClick={() => setFunctionRating(index)}
                                            onMouseEnter={() => setHover(index)}
                                            onMouseLeave={() => setHover(functionRating)}
                                        >
                                            <span>🚽</span>
                                        </button>
                                    )
                                })}
                            </div>
                            <label>Style:</label><br />
                            <textarea
                                type="text"
                                value={formData.style}
                                onChange={handleChange}
                                name="style"
                            /><br />
                            <div>
                                {[...Array(5)].map((toilet, index) => {
                                    index += 1
                                    return (
                                        <button
                                            id="toilet-button"
                                            type="button"
                                            key={index}
                                            className={index <= (styleRating || hover) ? "hover-on" : "hover-off"}
                                            onClick={() => setStyleRating(index)}
                                            onMouseEnter={() => setHover(index)}
                                            onMouseLeave={() => setHover(styleRating)}
                                        >
                                            <span>🚽</span>
                                        </button>
                                    )
                                })}
                            </div>
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