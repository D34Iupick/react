import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Button, CardActions } from '@mui/material';





export default function CardCurso({useNameImg, useName, useDescription, buttonLink}) {
  const MyImg = `http://localhost:5173/src/assets/imgs/${useNameImg}.jpg`
  return (

    <Card sx={{ maxWidth: 500, alignItems: 'center', margin: 2, borderStyle: 'solid', borderColor: 'red', borderWidth: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={MyImg}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {useName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {useDescription}
          </Typography>
        </CardContent>
        </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {buttonLink}
        </Button>
      </CardActions>
    </Card>

    
    
  );
}