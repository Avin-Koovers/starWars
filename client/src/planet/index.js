import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Document, Page } from 'react-pdf';
import MediaCard from './Card'
import axios from 'axios';
import Playground from './Search';
import image from '../sw.jpg'
import { Grid } from '@material-ui/core';
import swimage from '../sw.svg'


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
  right: 0,
  /* Preserve aspet ratio */
  minWidth: '100%',
  minHeight: '100%',

};




class swApp extends Component {

  constructor(props) {
    super(props)

    this.state = {
      planets: {},
      selectedPlanet: {
        value: {
          "name": "Alderaan",
          "rotation_period": "24",
          "orbital_period": "364",
          "diameter": "12500",
          "climate": "temperate",
          "gravity": "1 standard",
          "terrain": "grasslands, mountains",
          "surface_water": "40",
          "population": "2000000000",
          "residents": [
            "https://swapi.co/api/people/5/",
            "https://swapi.co/api/people/68/",
            "https://swapi.co/api/people/81/"
          ],
          "films": [
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/1/"
          ],
          "created": "2014-12-10T11:35:48.479000Z",
          "edited": "2014-12-20T20:58:18.420000Z",
          "url": "https://swapi.co/api/planets/2/"
        }
      },
    }

  }
  handleSearch = (e, value) => {
    if (value != undefined ) {
      
      this.setState({
        selectedPlanet: { value }
      })
      console.log('in index',this.state.selectedPlanet)
    }
  }





  async componentDidMount() {
    let planets = await axios.get('https://swapi.co/api/planets/');

    this.setState({
      planets
    })

  }


  renderLaptop() {
    return (
      <div>
        <Grid container spacing={10} justify='space-evenly' direction='row' style={{ marginTop: 10 }} >
          <Grid item xs={2} style={{ marginRight: 210, marginBottom: 20 }}>
            <img src={swimage} width="150  px" height="54px" viewBox="0 0 54 54" version="1.1" />
          </Grid>
          <Grid item xs={4} >
            <Playground buttonClick={this.handleSearch} planetsData={this.state.planets.data} />
          </Grid>


        </Grid>

        <Grid container justify='center'>

          <Grid item xs={4} justify='center'   >
            <MediaCard  data='image' planetData={this.state.selectedPlanet} />
          </Grid>

          <Grid item xs={5} justify='center'   >
            <MediaCard  data='data' planetData={this.state.selectedPlanet}/>
          </Grid>



        </Grid>

      </div>

    );
  }

  render() {
    return (


      <section style={sectionStyle}>

        {this.renderLaptop()}


      </section>



    )
  }
}

export default swApp;