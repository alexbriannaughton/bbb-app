import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RatingButton from "./RatingButton";

function DeleteButton({ reviewId, rerenderPage }) {
    
    const [date, setDate] = useState(new Date())
    const [reviewDescription, setReviewDescription] = useState("")
    const [cleanliness, setCleanliness] = useState("")
    const [cleanlinessRating, setCleanlinessRating] = useState(null)
    const [bathroomFunction, setBathroomFunction] = useState("")
    const [bathroomFunctionRating, setBathroomFunctionRating] = useState(null)
    const [style, setStyle] = useState("")
    const [styleRating, setStyleRating] = useState(null)

    function deleteReview() {
        fetch(`/reviews/${reviewId}`, { method: "DELETE" })
            .then(rerenderPage())
    }

    return (
        <button onClick={deleteReview}>
            Delete
        </button>
    )
}

export default DeleteButton