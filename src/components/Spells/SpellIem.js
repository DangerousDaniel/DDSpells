import './Spelltem.css'


const DeleteSpells = () => {
    console.log('I am the delete button')
    alert('I am a Popup!!!')
}

const SpellItem = (props) => {
    return(
        <tr>
                <td className='SpellTH'>{props.name}</td>
                <td>{props.castingTime}</td>
                <td>{props.range}</td>
                <td>{props.components}</td>
                <td>{props.duration}</td>
                <td><button onClick={DeleteSpells}>Delete</button></td>
        </tr>
    );
}

export default SpellItem;