import React from "react"

function AllBathroomsMap({ center, zoom, children }) {
    const ref = React.useRef(null)
    const [map, setMap] = React.useState()

    React.useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, { center, zoom }))
        }
    }, [ref, map])

    return (
    <>
        <div id="AllBathroomsMap" ref={ref}
        //  style={{ height: "500px", width: "500px" }}
         />
        {
        React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                // set the map prop on the child component
                // @ts-ignore
                return React.cloneElement(child, { map });
            }}
        )}
    </>)
}
        

export default AllBathroomsMap