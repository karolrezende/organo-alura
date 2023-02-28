import hexToRgba from 'hex-to-rgba'
import Colab from '../Colab/Colab'
import './Team.css'


const Team = (props)=>{
    return(
        (props.colaboradores.length > 0 )?
        <section className="team" style={{backgroundColor:hexToRgba(props.color, '0.5')}}>
            <input value={props.color} onChange={evento=> props.aoColorir(evento.target.value, props.id)} style={{backgroundColor:props.color}} type='color' className='input-color' />
            <h3 style={{borderColor: props.color}}>{props.title}</h3>
            <div className='colaboradores'  >
                {props.colaboradores.map((colaborador, i) => 
                    <Colab 
                        key={i} 
                        id= {colaborador.id}
                        name={colaborador.name}
                        cargo={colaborador.cargo} 
                        img={colaborador.img}
                        color={props.color}
                        aoDeletar={props.aoDeletar}
                        favorito={colaborador.favorito}
                        aofavorito={props.aofavorito}
                    />
                )}
            </div>
        </section> 
        : ''
    )
}
export default Team