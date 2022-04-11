import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function ActionAreaCard() {
    return (
      <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            image="images/generatore.png"
            alt="Generatore"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Generatore 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Voltage = 473V
            <ol></ol>
            Ampere = 732A
            </Typography>

            </CardContent>
    </Card>
  );
}            