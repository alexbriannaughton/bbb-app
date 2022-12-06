import BathroomForm from "./components/BathroomForm"

function NewBathroomPage({user, APIKey}) {
    return(
        <div>
            <BathroomForm user={user} APIKey={APIKey}/>
        </div>
    )
}

export default NewBathroomPage