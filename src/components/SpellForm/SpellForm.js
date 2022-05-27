import './SpellForm.css'
import react, {useState} from 'react'

const SpellForm = (props) => {

    //User Input Variables 
    const [UserInputName, setName] = useState('');
    const [UserInputCastingTime, setCastingTime] = useState('');
    const [UserInputRange, setRange] = useState('');
    const [UserInputComponents, setComponents] = useState('');
    const [UserInputDuration, setDuration] = useState('');
    const [UserInputDescription, setDescription] = useState('');
    
    //Set Name from User Input
    const UpdateNameHandler = (event) => {
        setName(event.target.value)

    } 

    //Set Casting Time from User Input
    const UpdateCastingTimeHandler = (event) => {
        setCastingTime(event.target.value)

    } 

    //Set Range from User Input
    const UpdateRangeHandler = (event) => {
        setRange(event.target.value)

    } 

    //Set Components from User Input
    const UpdateComponentsHandler = (event) => {
        setComponents(event.target.value)

    } 

    //Set Duration from User Input
    const UpdateDurationHandler = (event) => {
        setDuration(event.target.value)

    } 

    //Set Description from User Input
    const UpdateDescriptionHandler = (event) => {
        setDescription(event.target.value)

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
            description: UserInputDescription
        }

        onSaveSpellData(SpellDate)
        console.log(SpellDate)

        //Clear Data 
        setName('')
        setCastingTime('')
        setRange('')
        setComponents('')
        setDuration('')
        setDescription('')
    }

    //Save Data
    const saveSpellDataHandler = (userInputSpellData) => {
        
        const spellData = {
            ...userInputSpellData,
            id: Math.random()
        }

        props.onAddSpell(spellData)
        console.log(spellData)
        
    }

    const onSaveSpellData = (spellData) => {
        console.log(spellData)
        saveSpellDataHandler(spellData);
    }

    //Render HTML Form
    return (
        <form onSubmit={submitDataHandler} >
            <div>
                <label>Name: </label>
                <input type='text' value={UserInputName} onChange={UpdateNameHandler}></input>
                <br></br>
                <br></br>
            </div>

            <div>
                <label>CastingTime: </label>
                <input type='text' value={UserInputCastingTime} onChange={UpdateCastingTimeHandler}></input>
                <br></br>
                <br></br>
            </div>

                <label>Range: </label>
            <div>
                <input type='text' value={UserInputRange} onChange={UpdateRangeHandler}></input>
                <br></br>
                <br></br>
            </div>

            <div>
                <label>Components: </label>
                <input type='text' value={UserInputComponents} onChange={UpdateComponentsHandler}></input>
                <br></br>
                <br></br>
            </div>

            <div>
                <label>Duration: </label>
                <input type='text' value={UserInputDuration} onChange={UpdateDurationHandler}></input>
                <br></br>
                <br></br>
            </div>

            <div>
                <label>Description: </label>
                <br></br>
                <input className="textBox" value={UserInputDescription} type='text' onChange={UpdateDescriptionHandler}></input>
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