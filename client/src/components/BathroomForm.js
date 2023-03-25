import React, { useState } from "react";
import DatePicker from "react-datepicker";
import RatingButton from "./RatingButton";
import { useNavigate } from "react-router-dom"

import "react-datepicker/dist/react-datepicker.css";

function BathroomForm({ user, APIKey, setBathrooms }) {

    const navigate = useNavigate()

    // bathroom fields
    const [location, setLocation] = useState("")
    const [bathroomDescription, setBathroomDescription] = useState("")
    const [publicBool, setPublicBool] = useState(null)

    // review fields
    const [date, setDate] = useState(new Date())
    const [reviewDescription, setReviewDescription] = useState("")
    const [cleanliness, setCleanliness] = useState("")
    const [cleanlinessRating, setCleanlinessRating] = useState(null)
    const [bathroomFunction, setBathroomFunction] = useState("")
    const [bathroomFunctionRating, setBathroomFunctionRating] = useState(null)
    const [style, setStyle] = useState("")
    const [styleRating, setStyleRating] = useState(null)

    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {

        e.preventDefault()
        setIsLoading(true)

        // if (user === []) {
        //     setIsLoading(false)
        //     return setErrors(["You need to login to upload a new bathroom!"])
        // }

        try {

            const googleResp = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location},seattle&key=${APIKey}`)

            const newGeocode = await googleResp.json()
            if (!googleResp.ok || newGeocode.results[0].geometry === undefined) {
                throw ["You need to enter a valid address"]
            }


            const bathroomConfig = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    location: location,
                    lat: newGeocode.results[0].geometry.location.lat,
                    lng: newGeocode.results[0].geometry.location.lng,
                    neighborhood: newGeocode.results[0].address_components[2].long_name,
                    description: bathroomDescription,
                    public: publicBool,
                }),
            }

            const resp = await fetch("/bathrooms", bathroomConfig)
            const newBathroom = await resp.json()
            if (!resp.ok) {
                console.log(newBathroom.errors)
            }

            const reviewConfig = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: user.id,
                    bathroom_id: newBathroom.id,
                    date: date.toDateString(),
                    description: reviewDescription,
                    cleanliness,
                    cleanliness_rating: cleanlinessRating,
                    function: bathroomFunction,
                    function_rating: bathroomFunctionRating,
                    style,
                    style_rating: styleRating

                }),
            }

            const reviewResp = await fetch("/reviews", reviewConfig)
            const newReview = await reviewResp.json()
            if (!reviewResp.ok) {
                throw newReview.errors
            }



            navigate(`/bathrooms/${newBathroom.id}`)
            const bResp = await fetch("/bathrooms")
            const newBathrooms = await bResp.json()
            setBathrooms(newBathrooms)

        } catch (error) {
            console.log(error)
            setErrors(error)
            setIsLoading(false)
        }
    }

    function renderBathroomForm() {
        return (
            <>
                <h1 id="AddBathroomTitle">Add a new bathroom</h1>
                <div id="ABContainer">
                    <form id="AddBathroomForm" onSubmit={handleSubmit}>

                        {/* <h2>bathroom fields:</h2> */}
                        <div className="ABFlex">
                            <div>
                                <label>
                                    Street Address:
                                </label>
                                <input
                                    placeholder="1600 Pennsylvania Ave NW"
                                    type="text"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Date Used:</label>
                                <DatePicker
                                    selected={date}
                                    onChange={(date) => setDate(date)}
                                />
                            </div>
                        </div>
                        <div className="ABFlex">
                            <div>
                                <label>
                                    Location description:
                                </label>
                                <textarea
                                    type="text"
                                    value={bathroomDescription}
                                    onChange={(e) => setBathroomDescription(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>
                                    Public?
                                </label>
                                <div id="publicFlex">

                                    <input
                                        className="radio"
                                        type="radio"
                                        value={true}
                                        onChange={(e) => setPublicBool(e.target.value)}
                                        name="public"
                                    />
                                    <label className="notblock">True</label>
                                    <input
                                        className="radio"
                                        type="radio"
                                        value={0}
                                        onChange={(e) => setPublicBool(e.target.value)}
                                        name="public"
                                    />
                                    <label className="notblock">False</label>
                                </div>
                            </div>
                        </div>

                        {/* <h2>Review fields:</h2> */}

                        <label>Bathroom Description:</label>

                        <textarea
                            id="ABBD"
                            type="text"
                            value={reviewDescription}
                            onChange={(e) => setReviewDescription(e.target.value)}
                        />
                        <div className="ABFlex">
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
                        </div>
                        <div className="ABFlex">
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
                                <RatingButton className="ratingButton"
                                    rating={bathroomFunctionRating}
                                    setRating={setBathroomFunctionRating}
                                />
                            </div>
                        </div>
                        <div className="ABFlex">
                            <div>
                                <label>Style:</label>
                                <textarea
                                    type="text"
                                    value={style}
                                    onChange={(e) => setStyle(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Style Rating:</label>
                                <RatingButton
                                    rating={styleRating}
                                    setRating={setStyleRating}
                                />
                            </div>
                        </div>









                        <button id="ABSubmit" type="submit">
                            {isLoading ? "Loading..." : "Submit"}
                        </button>
                        <br />
                        {errors.map((err) => (
                            <p key={err}>{err}</p>
                        ))}
                    </form>
                </div>
            </>
        )
    }
    return (
        <>
            {user ? renderBathroomForm() : <h1 align="center">You need to log in to upload a new bathroom</h1>}
        </>
    )
}

export default BathroomForm