import './SpellForm.css'
import react, {useState} from 'react'

const SpellForm = (props) => {

    //#region User Input for Create a Spell
    //User Input Variables 
    const [UserInputName, setName] = useState('');
    const [UserInputCastingTime, setCastingTime] = useState('');
    const [UserInputRange, setRange] = useState('');
    const [UserInputComponents, setComponents] = useState('');
    const [UserInputDuration, setDuration] = useState('');
    const [UserInputDescription, setDescription] = useState('');

    const [isValid, setValid] = useState(false)
        
    //Set Name from User Input
    const UpdateNameHandler = (event) => {
        if (event.target.value.trim().length > 0){
            setValid(true)
        }

        setName(event.target.value)

    } 

    //Set Casting Time from User Input
    const UpdateCastingTimeHandler = (event) => {

        if (event.target.value.trim().length > 0){
            setValid(true)
        }

        setCastingTime(event.target.value)

    } 

    //Set Range from User Input
    const UpdateRangeHandler = (event) => {

        if (event.target.value.trim().length > 0){
            setValid(true)
        }

        setRange(event.target.value)

    } 

    //Set Components from User Input
    const UpdateComponentsHandler = (event) => {

        if (event.target.value.trim().length > 0){
            setValid(true)
        }

        setComponents(event.target.value)

    } 

    //Set Duration from User Input
    const UpdateDurationHandler = (event) => {

        if (event.target.value.trim().length > 0){
            setValid(true)
        }

        setDuration(event.target.value)

    } 

    //Set Description from User Input
    const UpdateDescriptionHandler = (event) => {

        if (event.target.value.trim().length > 0){
            setValid(true)
        }

        setDescription(event.target.value)

    } 
    //#endregion

    //Submit the Data from User Inputs
    const submitDataHandler = (event) => {
        event.preventDefault()

        if (UserInputName.trim().length === 0 || 
        UserInputCastingTime.trim().length === 0 || 
        UserInputRange.trim().length === 0 || 
        UserInputComponents.trim().length === 0 || 
        UserInputDuration.trim().length === 0 || 
        UserInputDescription.trim().length === 0) {
            setValid(true)
            return
        }

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

    //#region Save Data
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
    //#endregion

    //Render HTML Form
    return (
        <form onSubmit={submitDataHandler} >
            <div>
                <label>Name: </label>
                <input type='text' value={UserInputName} onChange={UpdateNameHandler}></input>
                <br></br>
                {!isValid ?<></> : <span  style={{color: 'red'}}>Please enter a name</span>}
                <br></br>
                <br></br>
            </div>

            <div>
                <label>CastingTime: </label>
                <input type='text' value={UserInputCastingTime} onChange={UpdateCastingTimeHandler}></input>
                <br></br>
                {!isValid ?<></> : <span  style={{color: 'red'}}>Please enter a castingTime</span>}
                <br></br>
                <br></br>
            </div>

            <div>
                <label>Range: </label>
                <input type='text' value={UserInputRange} onChange={UpdateRangeHandler}></input>
                <br></br>
                {!isValid ?<></> : <span  style={{color: 'red'}}>Please enter a description</span>}
                <br></br>
                <br></br>
            </div>

            <div>
                <label>Components: </label>
                <input type='text' value={UserInputComponents} onChange={UpdateComponentsHandler}></input>
                <br></br>
                {!isValid ?<></> : <span  style={{color: 'red'}}>Please enter a components</span>}
                <br></br>
                <br></br>
            </div>

            <div>
                <label>Duration: </label>
                <input type='text' value={UserInputDuration} onChange={UpdateDurationHandler}></input>
                <br></br>
                {!isValid ?<></> : <span  style={{color: 'red'}}>Please enter a duration</span>}
                <br></br>
                <br></br>
            </div>

            <div>
                <label>Description: </label>
                <br></br>
                <input className="textBox" value={UserInputDescription} type='text' onChange={UpdateDescriptionHandler}></input>
                <br></br>
                {!isValid ?<></> : <span  style={{color: 'red'}}>Please enter a description</span>}
                <br></br>
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