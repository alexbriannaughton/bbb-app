function DeleteButton({ reviewId, rerenderPage }) {


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