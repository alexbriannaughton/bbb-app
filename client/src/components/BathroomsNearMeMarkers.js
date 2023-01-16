import React, { useState } from "react"

const BathroomsNearMeMarkers = (options) => {
  const [marker, setMarker] = useState();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker({
        title: "Hello World!",
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        }
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

export default BathroomsNearMeMarkers