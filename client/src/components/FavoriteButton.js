import { useState } from "react"
function FavoriteButton({ user, bathroomid, favInfo, setFavInfo }) {
    const favorites = user ? user : null

    console.log(favorites)
    // function favFunc() {
    //     const favs = []

    //     favorites && favorites.forEach((fav) => {
    //         for (let key in fav) {
    //             favs.push(fav[key])
    //         }
    //     })

    //     let f = favs.filter((element, index) => {
    //         return index % 2 === 1
    //     })

    //     return f
    // }



    function handleHeartClick() {
        console.log(favInfo)
        if (favInfo) {

            fetch(`/favorites/${favInfo.id}`, { method: "DELETE" }).then((r) => {
                if (r.ok) {
                    setFavInfo(null)
                }
            })

        }
        else {
            const favData = {
                user_id: user.id,
                bathroom_id: bathroomid
            }
            fetch("/favorites", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(favData)
            }).then((r) => {
                if (r.ok) {
                    return r.json()
                }
            }).then((favObj) => setFavInfo(favObj))
        }
    }

    return (
        <div>
            <h2
                onClick={handleHeartClick}
            >
                {favInfo ? "♥" : "♡"}
            </h2>
        </div>
    )
}

export default FavoriteButton
