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


const useStyles = makeStyles({
  card: {
    height: '80vh',
    background: 'rgba(0,0,0,0.8)'
  },
  media: {
    height: '80vh',
  },
});

const MediaCard = ({ auth, data,fontsize }) => {
  const classes = useStyles();

  console.log('hi', fontsize)
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

            <Typography style={{ color: 'white', marginTop: 10, fontSize: '2.2em', fontWeight: 700 }} variant='h3'>INTERSTELLAR</Typography>

            <span style={{ color: '#00FC87', fontFamily: 'Oswald,sans-serif', fontSize: '1.3em', paddingBottom: '.25em' }}>Mankind was born on Earth. It was never meant to die here.</span>
            <p style={{ color: '#fafafa' }}>Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.</p>
            <span style={{ color: '#00FC87', fontFamily: 'Oswald,sans-serif', fontSize: '1.4em', display: 'block', paddingBottom: '.25em' }}>Adventure, Drama, Science Fiction</span>
            <span style={{ color: '#fafafa' }}>Legendary Entertainment, Syncopy, Lynda Obst Productions</span>

            <Grid container >
              <Grid item xs='6'>
                <span style={{ color: '#fafafa' }}>hi</span>
                <br></br>
                <span style={{ color: '#fafafa' }}>hi</span>

              </Grid>
              <Grid item xs='6'>
                <span style={{ color: '#fafafa' }}>hi</span>
                <br></br>
                <span style={{ color: '#fafafa' }}>hi</span>

              </Grid>
              <Grid item xs='6'>
                <span style={{ color: '#fafafa' }}>hi</span>
                <br></br>
                <span style={{ color: '#fafafa' }}>hi</span>

              </Grid>
              <Grid item xs='6'>
                <span style={{ color: '#fafafa' }}>hi</span>
                <br></br>
                <span style={{ color: '#fafafa' }}>hi</span>

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