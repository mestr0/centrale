import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          image="images/trasformatore.png"
          alt="Trasformatore"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Trasformatore
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Voltage = 220.000V
            <ol></ol>
            Ampere = 50A
          </Typography>
            
          <FormGroup>
      <FormControlLabel  control={<Switch />} label="OFF/ON" />
    </FormGroup>

        </CardContent>
    </Card>
  );
}