import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
    {
      value: 0,
      label: '0 Bar',
    },
    {
      value: 25,
      label: '25 Bar',
    },
    {
      value: 50,
      label: '50 Bar',
    },
    {
        value: 75,
        label: '75 Bar',
      },
    {
      value: 100,
      label: '100 Bar',
    },
  ];

  function valuetext(value) {
    return `${value}Bar`;
  }

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          image="images/compressore.png"
          alt="Compressore"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pressione Compressore
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Pressione=
          </Typography>
          

          <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={50}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </Box>


        </CardContent>
    </Card>
  );
}