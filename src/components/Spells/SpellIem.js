import './Spelltem.css'



const SpellItem = (props) => {
    const DeleteSpells = async (id) => {

        console.log(id);
    
        //delete from database
        let getDelete = await fetch("https://s6u6rjds0m.execute-api.us-east-1.amazonaws.com/dev/spells/delete", 
        {
            method: 'POST',
            body: JSON.stringify({
             id: id
            }),
            headers: {
                'Content-Type': 'application/json'
              }
        });
        //Update Table
        if(props.updateTable){
            console.log("Update Table")
            await props.updateTable();
        } else {
            alert("Table Needs to Update")
        }
    }

    return(
        <tr>
                <td className='SpellTH'>{props.name}</td>
                <td>{props.castingTime}</td>
                <td>{props.spell_range}</td>
                <td>{props.components}</td>
                <td>{props.duration}</td>
                <td><button onClick={()=> {DeleteSpells(props.id)}}>Delete</button></td>
        </tr>
    );
}

export default SpellItem;