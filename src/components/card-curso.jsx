import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Button, CardActions } from '@mui/material';



export default function CardCurso({useName, useDescription, buttonLink}) {
  // const imgAvatar = 'https://mui.com/static/images/cards/contemplative-reptile.jpg'

  return (
    <div className="width-screen h-auto flex justify-center items-center bg-gray-300 dark:bg-gray-900">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
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
    </div>
  );
}