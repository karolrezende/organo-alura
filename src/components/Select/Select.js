import './Select.css'
const Select = (props) => {
    return(
        <div className='select'>
            <label >{props.label}</label>
            <select onChange={event =>props.aoAlterado(event.target.value)}>
                {props.items.map((item, i) => {return <option key={i}>{item}</option> }
                )}
            </select>
        </div>
    )
}
export default Select