import { useEffect, useState } from "react"
import ListView from "./components/ListViewHomepage"

function Homepage({bathrooms}) {

    return(
        <div>
            <h1>hello from homepage</h1>
            <ListView bathrooms={bathrooms}/>
        </div>
    )
}

export default Homepage