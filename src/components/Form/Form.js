import TextArea from "../TextArea/TextArea"
import Select from '../Select/Select'
import Button from '../Button/Button'
import { useState } from "react"
import './Form.css'
const Form = (props)=>{

    const [name, setName] = useState('')
    const [cargo, setCargo] = useState('')
    const [img, setImg] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (event)=>{
        event.preventDefault()
        props.aoColaboradorCadastrado({
            name,
            cargo,
            img,
            time
        })
    }

    return(
        <div className="form-div"> 
            <form className="form" onSubmit={aoSalvar}>
                <h1>Preencha os items para criar um card de colaborador</h1>
                <TextArea 
                label='Nome' 
                placeholder='Digite seu nome'
                valor={name}
                aoAlterado={valor=>setName(valor)}/>
                <TextArea 
                label='Cargo' 
                placeholder='Digite seu cargo'
                valor={cargo}
                aoAlterado={valor=>setCargo(valor)}/>
                <TextArea 
                label='Imagem' 
                placeholder='Digite o endereço da sua imagem'
                valor={img}
                aoAlterado={valor=>setImg(valor)}/>
                <Select 
                label='Time' 
                aoAlterado={valor=>setTime(valor)}
                items={props.time}
                />
                <Button>
                    Criar card
                </Button>
            </form>
        </div>
    )
}
export default Form