import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function BathroomForm({ user }) {
    // bathroom fields
    const [location, setLocation] = useState("")
    const [bathroomDescription, setBathroomDescription] = useState("")
    const [publicBool, setPublicBool] = useState(0)
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // review fields
    const [date, setDate] = useState(new Date())
    const [reviewDescription, setReviewDescription] = useState("")
    const [cleanliness, setCleanliness] = useState("")
    const [cleanlinessRating, setCleanlinessRating] = useState(null)
    const [bathroomFunction, setBathroomFunction] = useState("")
    const [bathroomFunctionRating, setBathroomFunctionRating] = useState(null)
    const [style, setStyle] = useState("")
    const [styleRating, setStyleRating] = useState(null)

    function handleBathroomSubmit(e) {
        e.preventDefault()


        setIsLoading(true)

        //bathrooms fetch

        fetch("/bathrooms", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                location,
                description: bathroomDescription,
                public: publicBool,
            }),
        }).then((r) => {

            if (r.ok) {
                r.json().then((newBathroom) => {


                    console.log(newBathroom)
                    fetch("/reviews", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            user_id: user.id,
                            bathroom_id: newBathroom.id,
                            date,
                        }),
                    })
                    .then((r) => {

                        if (r.ok) {
                            r.json().then((newReview) => console.log(newReview))
                        } else {
                            r.json().then((err) => console.log(err.errors))
                        }
                    })

                })
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })

        //review post


    }

    function onRadioChange(e) {
        setPublicBool(e.target.value)
    }

    function onChangeDateHandler(value) {
        setDate(value)
    }

    return (
        <form onSubmit={handleBathroomSubmit}>
            <h2>bathroom fields:</h2>
            <label>
                Location:
            </label>
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <br />
            <label>
                Description:
            </label>
            <input
                type="text"
                value={bathroomDescription}
                onChange={(e) => setBathroomDescription(e.target.value)}
            />
            <br />
            <label>
                Public?
            </label>
            <br></br>
            <input
                type="radio"
                value={true}
                onChange={onRadioChange}
                name="public"
            />
            <label>True</label>
            <br />
            <input
                type="radio"
                value={0}
                onChange={onRadioChange}
                name="public"
            />
            <label>False</label>
            <br></br>
            <h2>Review fields:</h2>
            <label>Date:</label>
            <DatePicker
                selected={date}
                onChange={onChangeDateHandler}
            // dateFormat="yyyy MM dd"
            />




            <button type="submit">
                {isLoading ? "Loading..." : "Submit"}
            </button>
            <br />
            {errors.map((err) => (
                <p key={err}>{err}</p>
            ))}
        </form>

    )
}

export default BathroomForm