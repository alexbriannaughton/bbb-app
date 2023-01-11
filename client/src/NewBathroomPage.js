import BathroomForm from "./components/BathroomForm"

function NewBathroomPage({user, APIKey, setBathrooms}) {
    return(
        <div>
            <BathroomForm setBathrooms={setBathrooms} user={user} APIKey={APIKey}/>
        </div>
    )
}

export default NewBathroomPage