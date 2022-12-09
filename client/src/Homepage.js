import { useState } from "react"
import ListView from "./components/ListViewHomepage"
import MapView from "./components/MapViewHomepage"

function Homepage({bathrooms, APIKey}) {

    const [view, setView] = useState(false)

    function viewClick () {
        setView(!view)
    }

    return(
        <div>
            <div id="homepageTop">
                <button id="viewToggle" onClick={viewClick}>
                    {view === false ? 
                    <p>Map View</p>
                    : 
                    <p>List View</p>
                    }
                </button>
            </div>
            {view === true ? 
            <MapView bathrooms={bathrooms} APIKey={APIKey}/>
            :
            <ListView bathrooms={bathrooms}/>
             }
            
        </div>
    )
}

export default Homepage