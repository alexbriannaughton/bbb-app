import useSound from "use-sound";
import toiletFlushing from "../audio/toilet-flushing.mp3"

function DeleteButton({ reviewId, rerenderPage }) {

    const [playToilet] = useSound(toiletFlushing)

    function deleteReview() {
        
        fetch(`/reviews/${reviewId}`, { method: "DELETE" })
            .then(rerenderPage())
        playToilet()
    }

    return (
        <button onClick={deleteReview}>
            Delete
        </button>
    )
}

export default DeleteButton