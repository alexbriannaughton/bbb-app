import { useState } from "react"

function FavoriteButton({ user, bathroomid, favInfo, setFavInfo }) {

    function handleHeartClick() {
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
