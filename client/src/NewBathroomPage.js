import BathroomForm from "./components/BathroomForm"

function NewBathroomPage({user, APIKey, setBathrooms}) {
    return(
        <div>
            <h1 id="AddBathroomTitle">Add a new bathroom</h1>
            <BathroomForm setBathrooms={setBathrooms} user={user} APIKey={APIKey}/>
        </div>
    )
}

export default NewBathroomPage