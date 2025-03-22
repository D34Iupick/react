import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Button, CardActions } from '@mui/material';


export default function CardCurso({useNameImg, name, userName, useDescription='No hay descripcion', initialIsFollowing}) {
  
  // console.log(isFollowing);

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }


  const handleMouseEnter = () => {
    if (isFollowing) {setIsHovered(true);}
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const txtBtn = isFollowing ? 'Siguiendo' : 'Seguir';
  const btnState = isFollowing ? 'outlined' : 'contained';
  const colorBtn = isFollowing ? 'primary' : 'secondary';
  

  const txtNotFollowing = 'Dejar de seguir2';


  
  const MyImg = `http://localhost:5173/src/assets/imgs/${useNameImg}.jpg`
 

  return (

    <Card sx={{ maxWidth: 400, minWidth:250, alignItems: 'center', margin: 2, borderStyle: 'solid', borderColor: 'blue-500', borderWidth: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={MyImg}
          alt={useDescription}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h1><strong>{userName}</strong> - {name}</h1>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {useDescription}
          </Typography>
        </CardContent>
        </CardActionArea>
      <CardActions>
        <ButtonGroup
        >
        <Button 
        variant={btnState} 
        size="small" 
        color={colorBtn} 
        onClick={handleClick} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          "& .span-seguir": {
            display: isHovered && isFollowing ? "none" : "block", // Oculta el texto de seguir si isHovered e isFollowing son true
          },
          "& .span-dejar": {
            display: isHovered && isFollowing ? "block" : "none", // Muestra el texto de dejar de seguir si isHovered e isFollowing son true
          },
        }}
        >
          <span className='span-seguir'>{txtBtn}</span>
          <span className='span-dejar'>{txtNotFollowing}</span>
        </Button>
        <Button sx={{display: "block"}}>
           Cambiar descripción
        </Button>
        </ButtonGroup>     
      </CardActions>
    </Card>  
  );
}