import './SpellForm.css'
import react, {useState} from 'react'

const SpellForm = () => {

    //User Input Variables 
    const [UserInputName, setName] = useState('');
    const [UserInputCastingTime, setCastingTime] = useState('');
    const [UserInputRange, setRange] = useState('');
    const [UserInputComponents, setComponents] = useState('');
    const [UserInputDuration, setDuration] = useState('');
    const [UserInputNameDescription, setDescription] = useState('');
    
    //Set Name from User Input
    const UpdateNameHandler = (event) => {
        setName(event.target.value)
        console.log(event.target.value)
    } 

    //Set Casting Time from User Input
    const UpdateCastingTimeHandler = (event) => {
        setCastingTime(event.target.value)
        console.log(event.target.value)
    } 

    //Set Range from User Input
    const UpdateRangeHandler = (event) => {
        setRange(event.target.value)
        console.log(event.target.value)
    } 

    //Set Components from User Input
    const UpdateComponentsHandler = (event) => {
        setComponents(event.target.value)
        console.log(event.target.value)
    } 

    //Set Duration from User Input
    const UpdateDurationHandler = (event) => {
        setDuration(event.target.value)
        console.log(event.target.value)
    } 

    //Set Description from User Input
    const UpdateDescriptionHandler = (event) => {
        setDescription(event.target.value)
        console.log(event.target.value)
    } 

    //Submit the Data from User Inputs
    const submitDataHandler = (event) => {
        event.preventDefault()

        const SpellDate = {
            name: UserInputName,
            castingTime: UserInputCastingTime,
            range: UserInputRange,
            components: UserInputComponents,
            duration: UserInputDuration,
            description: UserInputNameDescription
        }

        console.log(SpellDate)
    }

    //Render HTML Form
    return (
        <form onSubmit={submitDataHandler}>
            <div>
                <label>Name: </label>
                <input type='text' onChange={UpdateNameHandler}></input>
                <br></br>
                <br></br>
            </div>

            <div>
                <label>CastingTime: </label>
                <input type='text' onChange={UpdateCastingTimeHandler}></input>
                <br></br>
                <br></br>
            </div>

                <label>Range: </label>
            <div>
                <input type='text' onChange={UpdateRangeHandler}></input>
                <br></br>
                <br></br>
            </div>

            <div>
                <label>Components: </label>
                <input type='text' onChange={UpdateComponentsHandler}></input>
                <br></br>
                <br></br>
            </div>

            <div>
                <label>Duration: </label>
                <input type='text' onChange={UpdateDurationHandler}></input>
                <br></br>
                <br></br>
            </div>

            <div>
                <label>Description: </label>
                <br></br>
                <input className="textBox" type='text' onChange={UpdateDescriptionHandler}></input>
                <br></br>
            </div>

            <div>
                <button type="submit">Create Spell</button>
                <br></br>
                <br></br>
            </div>
        </form>

    );
}

export default SpellForm