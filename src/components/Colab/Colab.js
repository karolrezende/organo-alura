import './Colab.css'

const Colab = (props)=>{
    return(
        <div className='colaborador'> 
            <div className='cabecalho'>
                <img src={props.img} alt='imagem'></img>
                
            </div>
            <div className='rodape'>
                <h4>{props.name}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Colab