import './SpellForm.css'

const SpellForm = () => {
    return (
        <form>
            <div>
                <label>Name: </label>
                <input type='text'></input>
                <br></br>
                <br></br>
            </div>

            <div>
                <label>CastingTime: </label>
                <input type='text'></input>
                <br></br>
                <br></br>
            </div>

            <div>
                <label>Range: </label>
                <input type='nuber'></input>
                <br></br>
                <br></br>
            </div>

            <div>
                <label>Components: </label>
                <input type='text'></input>
                <br></br>
                <br></br>
            </div>

            <div>
                <label>Duration: </label>
                <input type='text'></input>
                <br></br>
                <br></br>
            </div>

            <div>
                <label>Description: </label>
                <br></br>
                <input className="textBox" type='text'></input>
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