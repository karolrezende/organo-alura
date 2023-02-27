import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Rodape from './components/Rodape/Rodape';
import Team from './components/Team/Team';
function App() {
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    
    setColaboradores([...colaboradores, colaborador])
  }
  const team = [
    {
      name: 'Programação',
      firstColor: '#D9F7E9',
      secondColor: '#57C278'
    },
    {
      name: 'Front-end',
      firstColor: '#E8F8FF',
      secondColor: '#82CFFA'
    },
    {
      name: 'Data Science',
      firstColor: '#F0F8E2',
      secondColor: '#A6D157'
    },
    {
      name:  'Devops',
      firstColor: '#FDE7E8',
      secondColor: '#E06B69'
    },
    {
      name: 'Ux & Design',
      firstColor: '#FAE9F5',
      secondColor: '#DB6EBF'
    },
    {
      name: 'Mobile',
      firstColor: '#FFF5D9',
      secondColor: '#FFBA05'
    },
    {
      name: 'Inovação e gestão',
      firstColor: '#FFEEDF',
      secondColor: '#FF8A29'
    }
  ]
  return (
    <div>
      <Banner/>
      <Form time={team.map(time => time.name)} aoColaboradorCadastrado={colaborador =>aoNovoColaboradorAdicionado(colaborador)}/>
      {team.map(time=><Team 
      key={time.name}
      title={time.name} 
      firstColor={time.firstColor} 
      secondColor={time.secondColor} 
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.name)}/>)}
      <Rodape/>
    </div>
  );
}

export default App;
 