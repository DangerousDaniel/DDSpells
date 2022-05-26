import './SpellForm.css'
import react, {useState} from 'react'

const SpellForm = () => {

    const [UserInputName, setName] = useState('');
    const UpdateNameHandler = (event) => {
        setName(event.target.value)
        console.log(event.target.value)
    } 

    const [UserInputCastingTime, setCastingTime] = useState('');
    const UpdateCastingTimeHandler = (event) => {
        setName(event.target.value)
        console.log(event.target.value)
    } 

    const [UserInputRange, setRange] = useState('');
    const UpdateRangeHandler = (event) => {
        setName(event.target.value)
        console.log(event.target.value)
    } 

    const [UserInputComponents, setComponents] = useState('');
    const UpdateComponentsHandler = (event) => {
        setName(event.target.value)
        console.log(event.target.value)
    } 

    const [UserInputNameDuration, setDuration] = useState('');
    const UpdateDurationHandler = (event) => {
        setName(event.target.value)
        console.log(event.target.value)
    } 

    const [UserInputNameDescription, setDescription] = useState('');
    const UpdateDescriptionHandler = (event) => {
        setName(event.target.value)
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