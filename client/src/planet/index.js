import React, { Component } from 'react';
import ReactDom from 'react-dom';
import CustomLoader from './Loader';
import { Document, Page } from 'react-pdf';
import renderPdf from '../Resume_Avinash_6Years_MERN_Developer.pdf';
import MediaCard from './Card'
import axios from 'axios';
import IntegrationReactSelect from './Search'
import Playground from './Search';
import image from '../sw.jpg'
import { Grid } from '@material-ui/core';
import swimage from '../sw.svg'
import CenteredGrid from './Mygrid'
import { height } from '@material-ui/system';
import MediaQuery from 'react-responsive';
import { Z_FIXED } from 'zlib';
import { sign } from 'crypto';

var getData = async () => {
  let res = await axios.get('https://api.themoviedb.org/3/movie/157336?&api_key=cfe422613b250f702980a3bbf9e90716');
  console.log('hi', res);
}

const props = {
  attraction: {
    address1: "350 5th Ave",
    address2: "",
    average_rating: 4,
    city: "New York",
    country: "US",
    display_address: ["350 5th Ave", "New York, NY 10118"],
    id: 9,
    latitude_coordinate: "40.748442285082",
    location: {
      created_at: "2018–03–07T03:56:20.717Z",
      id: 1,
      latitude_coordinate: 40.712775,
      longitude_coordinate: -74.005973,

    }
  },
  auth: {
    loggedIn: true,
    loggingIn: false,
  }
}


var sectionStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8) 15%, rgba(0, 0, 0, 0.2) 50%  ), url(${image})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  position: 'absolute',
  top: 0,
  border: 0,
  right:0,
  /* Preserve aspet ratio */
  minWidth: '100%',
  minHeight: '100%',

};

const handleSearch = () => {
  console.log('Logged Click')
}


class App extends Component {

  renderMobile() {
    return (
      <div>
        <Grid container spacing={9} justify='center' style={{ marginTop: 60 }}>
          <Grid item xs={6} >
            <svg src={swimage}  width="54px" height="54px" viewBox="0 0 54 54" version="1.1"/>
          </Grid>
          <Grid item xs={10} >
            <Playground />
          </Grid>

        </Grid>

        <Grid container justify='center'>


          <Grid item xs={11}  >
            <MediaCard {...props} data='data' fontsize='250%' />
          </Grid>

          <Grid item xs={11} >
            <MediaCard {...props} data='image' />
          </Grid>




        </Grid>
      </div>

    );

  }


  renderLaptop() {
    return (
      <div>
        <Grid container spacing={10} justify='space-evenly' direction='row' style={{ marginTop: 10 }} >
          <Grid item xs={2} style={{ marginRight: 210, marginBottom: 20 }}>
            <img src={swimage} width="150  px" height="54px" viewBox="0 0 54 54" version="1.1" />
          </Grid>
          <Grid item xs={4} >
            <Playground buttonClick={handleSearch.bind(this)} />
          </Grid>


        </Grid>

        <Grid container justify='center'>

          <Grid item xs={4} justify='center'   >
            <MediaCard {...props} data='image' />
          </Grid>

          <Grid item xs={5} justify='center'   >
            <MediaCard {...props} data='data' />
          </Grid>



        </Grid>

      </div>

    );
  }

  render() {
    return (


      <section style={sectionStyle}>

        <div>
          {this.renderLaptop()}
          {/* <MediaQuery minWidth={1024} >
            {this.renderLaptop()}</MediaQuery>
          <MediaQuery maxDeviceWidth={1224}>{this.renderMobile()}</MediaQuery> */}
        </div>


      </section>



    )
  }
}

export default App;