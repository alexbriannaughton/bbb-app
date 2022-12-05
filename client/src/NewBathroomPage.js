import BathroomForm from "./components/BathroomForm"

function NewBathroomPage({user}) {
    return(
        <div>
            <BathroomForm user={user}/>
        </div>
    )
}

export default NewBathroomPage