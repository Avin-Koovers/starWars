import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from '../swmp.jpg';
import axios from 'axios';
import { inherits } from 'util';
import { Grid } from '@material-ui/core';
import { useState } from 'react';


const useStyles = makeStyles({
  card: {
    height: '80vh',
    background: 'rgba(0,0,0,0.8)'
  },
  media: {
    height: '80vh',
  },
});

const MediaCard = (props) => {
  const { auth, data,fontsize,planetData} = props;
  const classes = useStyles();

  const [requiredPlanetData, setPlanet] = useState(planetData);

  const {name,created,climate,population,diameter} = planetData.value

  // console.log('inside card',planetData.value.created);
  // console.log('name',planetData.value.climate  )
  // const {name,created,gravity,population} = planetData.value;

  // console.log(name);
  return (
     <Card className={classes.card}>
      <CardActionArea>
        {data === 'image' &&

          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          /> }
          </CardActionArea>
   

        {data === 'data' &&
          <CardContent>
            <div style={{padding:20,fontFamily:'Lato,sans-serif',lineHeight: '1.5',fontSize:fontsize}}>

            <Typography style={{ color: 'white', marginTop: 10, fontSize: '2.2em', fontWeight: 700 }} variant='h3'>Star Wars</Typography>

            <span style={{ color: '#00FC87', fontFamily: 'Oswald,sans-serif', fontSize: '1.3em', paddingBottom: '.25em' }}>Mankind was born on Earth. It was never meant to die here.</span>
            <p style={{ color: '#fafafa' }}>A young boy, Anakin is rescued from slavery, trained by jedi's, groomed by the Sith, has an affair with a princess, gets her pregnant, finds his dying mother, avengers her death, gets coerced to embrace the dark side, nearly dies but is saved by the Sith. Becomes a Lord.</p>
            <span style={{ color: '#00FC87', fontFamily: 'Oswald,sans-serif', fontSize: '1.4em', display: 'block', paddingBottom: '.25em' }}>{}</span>
            <span style={{ color: '#00FC87', fontFamily: 'Oswald,sans-serif', fontSize: '1.3em', paddingBottom: '.25em' }}>{name}:</span>

            <Grid container spacing='6'>
              <Grid item xs='6'>
                <span style={{ color: '#fafafa' }}>Created:</span>
                <br></br>
                <span style={{ color: '#fafafa' }}>{created}</span>

              </Grid>
              <Grid item xs='6'>
                <span style={{ color: '#fafafa' }}>Population</span>
                <br></br>
                <span style={{ color: '#fafafa' }}>{population}</span>

              </Grid>
              <Grid item xs='6'>
                <span style={{ color: '#fafafa' }}>Diameter</span>
                <br></br>
                <span style={{ color: '#fafafa' }}>{diameter}</span>

              </Grid>
              <Grid item xs='6'>
                <span style={{ color: '#fafafa' }}>Climate</span>
                <br></br>
                <span style={{ color: '#fafafa' }}>{climate}</span>

              </Grid>

              <Grid item xs='6'>

              </Grid>

            </Grid>

            </div>
          </CardContent>
        }


      
    </Card>
  );
}
export default MediaCard;