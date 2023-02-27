import Colab from '../Colab/Colab'
import './Team.css'
const Team = (props)=>{
    return(
        (props.colaboradores.length > 0 )?
        <section className="team" style={{backgroundColor:props.firstColor}}>
            <h3 style={{borderColor: props.secondColor}}>{props.title}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colab key={colaborador.name} name={colaborador.name} cargo={colaborador.cargo} img={colaborador.img}/>)}
            </div>
        </section> 
        : ''
    )
}
export default Team