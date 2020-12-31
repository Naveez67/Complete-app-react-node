import React from 'react';
import axios from 'axios';
import { Container, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Admissionprocess from './admissions/admissionprocess';
import Academies from './admissions/academices';
import Registor from './admissions/OnlineRegistration';
import Examinations from './admissions/Examination';
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

const Admissions = () => {
    const [students,setstudent]=React.useState([]);
    const classes = useStyles();
    const getData = () => {
        axios
          .get("http://localhost:4000/api/products")
          .then((res) => {
            setstudent(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      React.useEffect(getData, []);
    console.log("inside admissons");
    return ( <div className={classes.root}>
            <Typography style={{textAlign:"center",fontSize:"25px"}}>
            <h1 >ADMISSIONS</h1>
            </Typography>
            
            
        <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
        <Admissionprocess />
        </Grid>
        <Grid item xs={6} sm={3}>
        <Academies />
        </Grid>
        <Grid item xs={6} sm={3}>
        <Examinations />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Registor />
        </Grid>
      </Grid>
      
           
            
               
                
            
        
    </div> );
}
 
export default Admissions;