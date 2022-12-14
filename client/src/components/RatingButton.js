import React, { useState } from "react";

function RatingButton( {rating, setRating} ) {
    const [hover, setHover] = useState(0);
    return (
        <div>
            {[...Array(5)].map((toilet, index) => {
                index += 1
                return (
                    <button
                        id="toilet-button"
                        type="button"
                        key={index}
                        className={index <= (rating || hover) ? "hover-on" : "hover-off"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span>🚽</span>
                    </button>
                )
            })}
        </div>
    )
}

export default RatingButton