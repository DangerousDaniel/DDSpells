import './Spelltem.css'

function SpellItem(props){
    return(
        <tr>
                <td className='SpellTH'>{props.name}</td>
                <td>{props.castingTime}</td>
                <td>{props.range}</td>
                <td>{props.components}</td>
                <td>{props.duration}</td>
                <td><button>Delete</button></td>
        </tr>
    );
}

export default SpellItem;