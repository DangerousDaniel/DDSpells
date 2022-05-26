import './SpellForm.css'
import react, {useState} from 'react'

const SpellForm = () => {

    //Name
    const [UserInputName, setName] = useState('');
    const UpdateNameHandler = (event) => {
        setName(event.target.value)
        console.log(event.target.value)
    } 

    //Casting Time
    const [UserInputCastingTime, setCastingTime] = useState('');
    const UpdateCastingTimeHandler = (event) => {
        setCastingTime(event.target.value)
        console.log(event.target.value)
    } 

    //Range
    const [UserInputRange, setRange] = useState('');
    const UpdateRangeHandler = (event) => {
        setRange(event.target.value)
        console.log(event.target.value)
    } 

    //Components
    const [UserInputComponents, setComponents] = useState('');
    const UpdateComponentsHandler = (event) => {
        setComponents(event.target.value)
        console.log(event.target.value)
    } 

    //Duration
    const [UserInputDuration, setDuration] = useState('');
    const UpdateDurationHandler = (event) => {
        setDuration(event.target.value)
        console.log(event.target.value)
    } 

    //Description
    const [UserInputNameDescription, setDescription] = useState('');
    const UpdateDescriptionHandler = (event) => {
        setDescription(event.target.value)
        console.log(event.target.value)
    } 

    return (
        <form>
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

            <div>
                <label>Range: </label>
                <input type='nuber' onChange={UpdateRangeHandler}></input>
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