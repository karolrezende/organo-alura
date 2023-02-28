import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Rodape from './components/Rodape/Rodape';
import Team from './components/Team/Team';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    
    setColaboradores([...colaboradores, colaborador])
  }
  const [team, setTeam] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#57C278'
    },
    {
      id: uuidv4(),
      name: 'Front-end',
      color: '#82CFFA'
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#A6D157'
    },
    {
      id: uuidv4(),
      name:  'Devops',
      color: '#E06B69'
    },
    {
      id: uuidv4(),
      name: 'Ux & Design',
      color: '#DB6EBF'
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05'
    },
    {
      id: uuidv4(),
      name: 'Inovação e gestão',
      color: '#FF8A29'
    }
  ])
  const aoColorir=(color, id)=>{
    setTeam(team.map(teamOne=>{
      if(teamOne.id === id){
        teamOne.color = color
      }
      return teamOne
    }))
  }
  function aoDeletar(id){
    console.log(id)
    setColaboradores(colaboradores.map(colaborador=> colaborador.id !== id))
  }
  function createTeam(newTime){
    setTeam([...team, {...newTime, id: uuidv4()}])
  }
  function aofavorito(id){
    setColaboradores(colaboradores.map(colaborador=> {
      if(colaborador.id === id){
        colaborador.favorito = !colaborador.favorito
      } 
      return colaborador
      })
    )
  }
  return (
    <div>
      <Banner/>
      <Form time={team.map((time) => time.name)} 
        aoColaboradorCadastrado={colaborador =>aoNovoColaboradorAdicionado(colaborador)}
        createTeam={createTeam}
      />
      {team.map((time, i)=>
        <Team 
          key={i}
          aofavorito={aofavorito}
          id ={time.id}
          title={time.name} 
          firstColor={time.color} 
          color={time.color} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.name)}
          aoDeletar={aoDeletar}
          aoColorir={aoColorir}
        />
      )}
      <Rodape/>
    </div>
  );
}

export default App;
 