/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles, Input } from '@material-ui/core';

const styles = {
  listbox: {
    background: 'grey'

  },
  input: {
    '&:before': {
      borderBottom: '1px solid white'
    },
    '&:after': {
      borderBottom: `2px solid white`
    },
    '&:hover:not($disabled):not($focused):not($error):before': {
      borderBottom: `2px solid white`
    },
    color: 'white',

  },
  resize: {
    fontSize: true ? 10 : 20,

  },
  groupLabel: {

  }

}




// const theme = createMuiTheme({
//   props: {
//     // Name of the component ⚛️
//     MuiAutocomplete: {
//       // The default props to change
//       // No more ripple, on the whole application 💣!
//       ListboxProps: {
//         style: {
//           background: 'grey',
//         },
//         scrollable:'false'

//       },
//       MuiInput:{
//         placeholder:'Something cool'
//       }


//     },
//     MuiTextField: {
//       color: 'primary',
//     },

//     MuiInput: {
//         style:{
//           borderBottom:'2px solid',
//         },
//         disableUnderline:true


//   },

//   MuiInputBase: {
//     style:{
//       WebkitTextFillColor:'white'
//     }

// },

//   },
// });



function ComboBox(props) {
  const { classes } = props;


  var planetData = props.planetsData;
  if (planetData != undefined) {
    planetData = planetData.results
  }
  const fontSize = (option) => {
    return Math.log10(option.population) / 0.3
  };

  return (


    { planetData } && <Autocomplete
      id="combo-box-demo"

      // options={top100Films}
      // getOptionLabel={option => option.title}

      options={planetData}
      renderOption={(option, { selected }) => (
        <div style={{ fontSize: fontSize(option) }}>
          {option.name}
        </div>
      )}



      getOptionLabel={option => option.name}
      onChange={(e, value) => props.buttonClick(e, value)}


      classes={{ inputRoot: classes.input, listbox: classes.listbox, option: classes.resize }}
      fullWidth

      renderInput={params => (
        <TextField {...params} InputLabelProps={{ className: classes.input }} label="Search Star war planets" fullWidth />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top


export default withStyles(styles)(ComboBox)