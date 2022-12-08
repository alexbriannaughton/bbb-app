import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const Marker = (options) => {
    const [marker, setMarker] = useState();
    const navigate = useNavigate()

    // this section until the useEffect is unnecessary if we're on a OneBathroomMap
    const contentString =
    `<h3>${options.bathroom.location}</h3>` +
    `<p>${options.bathroom.description}</p>` +
    `<p>${options.bathroom.b_average_score}</p>`

    const infowindow = new window.google.maps.InfoWindow({
        content: 
        // <Link className="bigger" to={`bathrooms/${options.bathroom.id}`}>
          contentString
          // </Link>
    })

    if (marker) {
        marker.addListener("click", () => {
            console.log("clickie!")
            infowindow.open({
                anchor: marker,
            })
        })
    }
    

    React.useEffect(() => {
      if (!marker) {
        setMarker(new window.google.maps.Marker({
            title: options.bathroom.location,
        }));
        
      }
  
      // remove marker from map on unmount
      return () => {
        if (marker) {
          marker.setMap(null);
        }
      };
    }, [marker]);
    React.useEffect(() => {
      if (marker) {
        marker.setOptions(options);
      }
    }, [marker, options]);
    return null;
  };

  export default Marker