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
          image="images/combustibile.png"
          alt="Combustibile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Quantità Combustibile
          </Typography>
          <Typography variant="body2" color="text.secondary">
            L=350
          </Typography>
          
          <FormGroup>
      <FormControlLabel  control={<Switch />} label="Rubinetto Combustibile" />
    </FormGroup>

        </CardContent>
    </Card>
  );
}
