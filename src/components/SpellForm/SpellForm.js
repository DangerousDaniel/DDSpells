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

    //valid Boolean Flag
    const [isValid, setValid] = useState(false)
        
    //Set Name from User Input
    const UpdateNameHandler = (event) => {

        //Input valid
        if (event.target.value.trim().length > 0){
            setValid(true)
        }

        setName(event.target.value)

    } 

    //Set Casting Time from User Input
    const UpdateCastingTimeHandler = (event) => {

        //Input valid
        if (event.target.value.trim().length > 0){
            setValid(true)
        }

        //Set Data
        setCastingTime(event.target.value)
    } 

    //Set Range from User Input
    const UpdateRangeHandler = (event) => {

        //Input valid
        if (event.target.value.trim().length > 0){
            setValid(true)
        }

        //Set Data
        setRange(event.target.value)
    } 

    //Set Components from User Input
    const UpdateComponentsHandler = (event) => {

        //Input valid
        if (event.target.value.trim().length > 0){
            setValid(true)
        }

        //Set Data
        setComponents(event.target.value)
    } 

    //Set Duration from User Input
    const UpdateDurationHandler = (event) => {

        //Input data valid
        if (event.target.value.trim().length > 0){
            setValid(true)
        }

        //Set data
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

        //valid Data (if the string is empty)
        if (UserInputName.trim().length === 0 || 
        UserInputCastingTime.trim().length === 0 || 
        UserInputRange.trim().length === 0 || 
        UserInputComponents.trim().length === 0 || 
        UserInputDuration.trim().length === 0 || 
        UserInputDescription.trim().length === 0) {
            setValid(true)
            return
        }

        //Create new Data
        const SpellDate = {
            name: UserInputName,
            castingTime: UserInputCastingTime,
            spell_range: UserInputRange,
            components: UserInputComponents,
            duration: UserInputDuration,
            description: UserInputDescription
        }

        //Save Data
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
    const onSaveSpellData = (spellData) => {
        console.log(spellData)
        saveSpellDataHandler(spellData);
    }

    //Add Data
    const saveSpellDataHandler = (userInputSpellData) => {
        
        const spellData = {
            ...userInputSpellData,
            id: Math.random()
        }

        props.onAddSpell(spellData)
        console.log(spellData)
        
    }

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