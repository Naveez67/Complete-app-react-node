import React from 'react';
import axios from 'axios';
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Aboutinfo from './contact-us/aboutinfo';
import Reachus from './contact-us/Reachus';
const useStyles = makeStyles((theme) => ({
  
    root: {
        flexGrow: 1,
      }, 
      addBtn: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  allign: {
    textalign: "center",
  }
}));

const Contacus = () => {
  const classes = useStyles();
    return ( <div className={classes.root}>
            <Typography style={{fontSize:"25px"}}>
            <h1 >Contac Us</h1>
            </Typography>
            
            
        <Grid container spacing={3} style={{backgroundColor:"blue"}}>
        <Grid item xs={6} sm={3}>
        <Aboutinfo />
        </Grid>
        <Grid item xs={6} sm={3}>
        <Reachus />
        </Grid>
        <Grid item xs={6} sm={3}>
        </Grid>
        <Grid item xs={6} sm={3}>
          
        </Grid>
      </Grid>
      
           
            
               
                
            
        
    </div> );
}
 
export default Contacus;
