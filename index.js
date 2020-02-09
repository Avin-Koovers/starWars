// import express from 'express';
const express = require('express');


const app = express();

app.get('/',(req,res) =>{
    res.send('hi');
})

const path = require('path');

app.use(express.static(path.join(__dirname, 'client/dist')));
  if(process.env.NODE_ENV === 'production') { 
    app.use(express.static(path.join(__dirname, 'client/dist'))); 
    app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/dist/index.html'));  })}
    app.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/client/dist/index.html'));})
    
const PORT = process.env.PORT || 5000 ; 
app.listen(PORT);