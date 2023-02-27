import './Select.css'
const Select = (props) => {
    return(
        <div className='select'>
            <label >{props.label}</label>
            <select onChange={event =>props.aoAlterado(event.target.value)}>
                {props.items.map(item => {return <option key={item}>{item}</option> }
                )}
            </select>
        </div>
    )
}
export default Select