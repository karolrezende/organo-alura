import TextArea from "../TextArea/TextArea"
import Select from '../Select/Select'
import Button from '../Button/Button'
import { useState } from "react"
import './Form.css'
import { v4 as uuidv4 } from 'uuid';
const Form = (props)=>{

    const [name, setName] = useState('')
    const [cargo, setCargo] = useState('')
    const [img, setImg] = useState('')
    const [time, setTime] = useState('')
    const [nameTeam, setNameTeam] = useState('')
    const [colorTeam, setColorTeam] = useState('')

    const aoSalvar = (event)=>{
        event.preventDefault()
        props.aoColaboradorCadastrado({
            name,
            cargo,
            img,
            time,
            id: uuidv4(),
            favorito: false
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
            <form className="form" onSubmit={(event)=>{
                event.preventDefault()
                props.createTeam({
                    name: nameTeam,
                    color: colorTeam
                })
            }}>    
                <h1>Preencha os items para criar um card de colaborador</h1>
                <TextArea 
                label='Nome do time' 
                placeholder='Digite o nome do time'
                valor={nameTeam}
                aoAlterado={valor=>setNameTeam(valor)}/>
                <TextArea 
                label='Cor' 
                type={'color'}
                placeholder='Digite a cor do time'
                valor={colorTeam}
                aoAlterado={valor=>setColorTeam(valor)}/>
                <Button>
                    Criar novo time
                </Button>
            </form>
        </div>
    )
}
export default Form