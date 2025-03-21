import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Button, CardActions } from '@mui/material';


export default function CardCurso({useNameImg, name, children, useDescription='No hay descrpcion'}) {
  
  // console.log(isFollowing);

  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }

  const txtBtn = isFollowing ? 'Siguiendo' : 'Seguir';
  const btnState = isFollowing ? 'outlined' : 'contained';
  
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
            {children}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {useDescription}
          </Typography>
        </CardContent>
        </CardActionArea>
      <CardActions>
        <ButtonGroup
        >
        <Button variant={btnState} size="small" color="primary" onClick={handleClick}>
          {txtBtn}
        </Button>
        <Button>
           Cambiar descrpción
        </Button>
        </ButtonGroup>     
      </CardActions>
    </Card>

    
    
  );
}