import useSound from "use-sound";
import toiletFlushing from "../audio/toilet-flushing.mp3"

function DeleteButton({ reviewId, rerenderPage, setUserReviews, userReviews, setUser }) {

    const [playToilet] = useSound(toiletFlushing)

    function deleteReview() {
        
        fetch(`/reviews/${reviewId}`, { method: "DELETE" })
            .then((r) => {
                if (r.ok) {
                    const updatedReviews =
                    userReviews.filter((review) => review.id !== reviewId)
                    setUserReviews(updatedReviews)
                    rerenderPage()
                    fetch("/me").then((r) => {
                        if (r.ok) {
                          r.json().then((user) => setUser(user));
                        }
                      })
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