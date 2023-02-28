import './TextArea.css'
const TextArea = (props) =>{
    const onTap = (event)=>{
        props.aoAlterado(event.target.value)
    }
    return (
        <div className='textArea'>
            <label>{props.label}</label>
            <input type={props.type} onChange={onTap} placeholder={props.placeholder}></input>
        </div>
    )
}
export default TextArea