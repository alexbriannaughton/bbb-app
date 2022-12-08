import useSound from "use-sound";
import toiletFlushing from "../audio/toilet-flushing.mp3"

function DeleteButton({ reviewId, rerenderPage, setUserReviews, userReviews }) {

    const [playToilet] = useSound(toiletFlushing)

    function deleteReview() {
        
        fetch(`/reviews/${reviewId}`, { method: "DELETE" })
            .then((r) => {
                if (r.ok) {
                    const updatedReviews =
                    userReviews.filter((review) => review.id !== reviewId)
                    setUserReviews(updatedReviews)
                    rerenderPage()
                }
            })
        playToilet()
        
    }

    return (
        <button onClick={deleteReview}>
            Delete
        </button>
    )
}

export default DeleteButton