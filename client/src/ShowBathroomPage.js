import { useEffect, useState } from "react";
// import { useReducer } from "react";
import { useParams } from 'react-router-dom'
import ReviewForm from "./components/ReviewForm";
import { Wrapper } from '@googlemaps/react-wrapper';
import OneBathroomMap from "./OneBathroomMap";
import MarkerNoInfoWindow from "./components/MarkerNoInfoWindow"
import DeleteButton from "./components/DeleteButton";
import EditForm from "./components/EditForm";
import getToilets from "./components/getToilets";
import FavoriteButton from "./components/FavoriteButton";

function ShowBathroomPage({ user, APIKey, setUserReviews, userReviews, userFavorites, setUserFavorites, setUser }) {

    const params = useParams()

    const [bathroom, setBathroom] = useState({})
    const [location, setLocation] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const [showEditForm, setShowEditForm] = useState(false)

    const [currentReview, setCurrentReview] = useState('')

    const [favInfo, setFavInfo] = useState(null)

    useEffect(() => {
        fetch(`/bathrooms/${params.bathroomid}`)
            .then((res) => res.json())
            .then(data => {
                setBathroom(data)
                setLocation({
                    lat: data.lat,
                    lng: data.lng
                })

            });
        setIsLoaded(true)
    }, [])

    useEffect(() => {
        if (userFavorites) {
            const fi = (userFavorites.find((fav) => {
                return fav.bathroom_id === parseInt(params.bathroomid)
            })) || null
            setFavInfo(fi)
        }
    }, [userFavorites, params.bathroomid])

    function handleEditClick(review) {
        setShowEditForm(true)
        setCurrentReview(review)
    }
// console.log(favInfo)
    function rerenderPage() {
        fetch(`/bathrooms/${params.bathroomid}`)
            .then((res) => res.json())
            .then((data) => setBathroom(data))
    }

    function renderMap() {
        if (location) {
            return (
                <Wrapper classname="Wrapper" apiKey={APIKey} >
                    <OneBathroomMap center={location} zoom={14}>
                        <MarkerNoInfoWindow position={location} bathroom={bathroom} />
                    </OneBathroomMap>
                </Wrapper>
            )
        }
    }

    console.log(bathroom)

    function renderReviews() {
        // if (bathroom.reviews && bathroom.reviews.length) === 0 {
            
        // }
        return (
            bathroom.reviews && bathroom.reviews.map((review) => (
                <div key={review.id} className="review-div">
                    <p id="reviewTitle">{review.user.username} visited this bathroom on {review.date}:</p>
                    <p>Description: <br /> {review.description}</p>
                    <p>Cleanliness: <br />{review.cleanliness}</p>
                    <p className="bigToilets">Cleanliness Rating: {getToilets(review.cleanliness_rating)}</p>
                    <p>Function: <br />{review.function}</p>
                    <p className="bigToilets">Function Rating: {getToilets(review.function_rating)}</p>
                    <p>Style: <br />{review.style}</p>
                    <p className="bigToilets">Style Rating: {getToilets(review.style_rating)}</p>
                    <p id="finalScore">Final Score: {review.average_score}/5</p>
                    <div id="reviewButtons">
                        {user && review.user_id === user.id ?
                            <DeleteButton
                                setUser={setUser}
                                reviewId={review.id}
                                rerenderPage={rerenderPage}
                                setUserReviews={setUserReviews}
                                userReviews={userReviews}
                            />
                            : null}

                        {user && review.user_id === user.id ?
                            <button onClick={(e) => handleEditClick(review)}>
                                Edit
                            </button>
                            : null}
                        
                    </div>
                    <EditForm
                            reviewId={review.id}
                            rerenderPage={rerenderPage}
                            showEditForm={showEditForm}
                            setShowEditForm={setShowEditForm}
                            currentReview={currentReview}
                        />
                </div>
            ))
        )

        
    }

    return (
        <>
            {isLoaded === false ?
                <h2>loading...</h2>
                :
                <div>
                    <div id="OneBathroomTop">
                        <div id="OneBathroomTopLeft">
                            <div id="OneBathroomAbout">
                                <h2>{bathroom.location}</h2>
                                <p>{bathroom.description}</p>
                                <p>{bathroom.public ? "Public bathroom" : ""}</p>
                                <div id="scoreHeart">
                                    <h2>Average score: {bathroom.b_average_score}/5</h2>
                                    {user ? <FavoriteButton
                                        user={user}
                                        bathroomid={bathroom.id}
                                        // favorites={user.favorites}
                                        favInfo={favInfo}
                                        setFavInfo={setFavInfo}
                                        userFavorites={userFavorites}
                                        setUserFavorites={setUserFavorites}
                                    /> : null}
                                </div>

                            </div>


                            {/* {user ? <FavoriteButton
                                user={user}
                                bathroomid={bathroom.id}
                                // favorites={user.favorites}
                                favInfo={favInfo}
                                setFavInfo={setFavInfo}
                                userFavorites={userFavorites}
                                setUserFavorites={setUserFavorites}
                            /> : null} */}


                            <ReviewForm
                                rerenderPage={rerenderPage}
                                user={user}
                                bathroomId={bathroom.id}
                                userReviews={userReviews}
                                setUserReviews={setUserReviews}
                                setUser={setUser}
                            />
                        </div>

                        {renderMap()}

                    </div>
                    <div id="ReviewsSection">
                        <h1>Reviews:</h1>
                        {(bathroom.reviews && bathroom.reviews.length === 0) ? 
                        <p id="uhoh">This bathroom doesn't have any reviews yet!</p>
                        :
                        <div id="AllReviewsDiv">
                            {renderReviews()}
                        </div>
                        }
                        
                    </div>

                </div>
            }
        </>
    )
}

export default ShowBathroomPage