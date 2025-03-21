import CardCurso from './components/card-curso';
import { Button } from '@mui/material';

const anteHeroes = [
  { 
    id:1,
    userName:"Wolverin", 
    UserNameImg:"wolverin", 
    description:"Wolverin", 
    isFollowing: true
  },
  { 
    id:2,
    userName:"Deadpool", 
    UserNameImg:"deadpool", 
    description:"Deadpool", 
    isFollowing: true
  },
  { 
    id:3,
    userName:"Punisher", 
    UserNameImg:"punisher", 
    description:"Punisher", 
    isFollowing: false
  },
]

export default function App() {
 
  return (
     <>
        
          <div className='grid auto-cols-max grid-flow-col'>
            {
              anteHeroes.map((anteHeroes) => (
                <CardCurso key={anteHeroes.id} useNameImg={anteHeroes.UserNameImg} useDescription={anteHeroes.description} isFollowing={anteHeroes.isFollowing}>
                  <strong>{anteHeroes.userName}</strong>
                </CardCurso>  
              ))
            }
          </div>
          <Button variant="outlined" size="xl">Cambiar descripción</Button>
        </>
  )
}
