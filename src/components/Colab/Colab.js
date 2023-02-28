import { AiFillCloseCircle, AiFillHeart,AiOutlineHeart} from 'react-icons/ai';
import './Colab.css'
const Colab = (props)=>{
                            
    return(
        <div className='colaborador'> 
            <div className='cabecalho' style={{backgroundColor:props.color}}>
                <AiFillCloseCircle 
                    className="deletar" 
                    onClick={() => props.aoDeletar(props.id)} 
                />
                <img src={props.img} alt='imagem'></img>
                
            </div>
            <div className='rodape-colab'>
                <h4>{props.name}</h4>
                <h5>{props.cargo}</h5>
            <div>
                {props.favorito 
                    ? <AiFillHeart onClick={()=>props.aofavorito(props.id)}/> 
                    : <AiOutlineHeart onClick={()=>props.aofavorito(props.id)}/>
                } 
            </div>
            </div>
        </div>
    )
}

export default Colab