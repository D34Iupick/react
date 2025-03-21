import CardCurso from './components/card-curso';


const anteHeroes = [
  { 
    id:1,
    userName:"Wolverin",
    name: "Logan", 
    UserNameImg:"wolverin", 
    description:"Es un mutante con garras retráctiles de adamantium y un poderoso factor de curación que lo hace casi inmortal. Es miembro de los X-Men y tiene un carácter rudo y solitario. Su pasado misterioso y su lucha interna entre su naturaleza animal y su humanidad son aspectos clave de su personaje.", 
    isFollowing: true
  },
  { 
    id:2,
    userName:"Deadpool",
    name: "Wede Wilson", 
    UserNameImg:"deadpool", 
    description:"Es un mercenario con un sentido del humor irreverente y rompe la cuarta pared (sabe que es un personaje de cómic). Tras ser sometido a un experimento que le otorgó un factor curativo similar al de Wolverine, su cuerpo quedó desfigurado. Es conocido por su personalidad caótica, su habilidad con las espadas y su constante charla.", 
    isFollowing: true
  },
  { 
    id:3,
    userName:"Punisher",
    name: "Frank Castle", 
    UserNameImg:"punisher", 
    description:"Es un vigilante antiheroico que lucha contra el crimen de manera brutal y violenta. Tras la muerte de su familia a manos de la mafia, Frank Castle decide dedicar su vida a exterminar criminales. No tiene superpoderes, pero es un experto en combate, armas y tácticas militares. Su símbolo es una calavera en su pecho.", 
    isFollowing: false
  },
]

export default function App() {
 
  return (
     
          <div className='w-screen flex flex-wrap justify-center border-amber-600 border-4 bg-cyan-400'>
            {
              anteHeroes.map((anteHeroes) => (
                <CardCurso key={anteHeroes.id} useNameImg={anteHeroes.UserNameImg} useDescription={anteHeroes.description} isFollowing={anteHeroes.isFollowing}>
                  <strong>{anteHeroes.userName}</strong>
                  <p>{anteHeroes.name}</p>
                </CardCurso>  
              ))
            }
          </div>
        
  )
}
