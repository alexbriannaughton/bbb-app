import { useState } from "react"

function FavoriteButton({ user, bathroomid, favInfo, setFavInfo, setUserFavorites, userFavorites }) {

    function addToFavs(favObj) {
        setFavInfo(favObj)
        setUserFavorites([...userFavorites, favObj])
    }
console.log(favInfo)
    function handleHeartClick() {
        if (favInfo) {

            fetch(`/favorites/${favInfo.id}`, { method: "DELETE" }).then((r) => {
                if (r.ok) {
                    const updatedFavs =
                        userFavorites.filter((fav) => fav.id !== favInfo.id)                    
                    setUserFavorites(updatedFavs)
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
                    r.json().then((favObj) => addToFavs(favObj))
                    
                }
            })
        }
    }

    return (
        <div>
            <h1
                onClick={handleHeartClick}
            >
                {favInfo ? "♥" : "♡"}
            </h1>
        </div>
    )
}

export default FavoriteButton
