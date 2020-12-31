import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Aboutus from "./aboutus";
import Admissions from "./Admission";
import Contacus from "./ContactUs";
const useStyles = makeStyles((theme) => ({
    media: {
        height: 600,
        width:1300
    
      },
  }));
const LandingPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography style={{marginLeft:"1rem"}}>
      <CardMedia
            className={classes.media}
            image="./img.jpg"
            title="Aboutus"
          />
      </Typography>
      <hr></hr>
      <Aboutus />
      <hr></hr>
      <Admissions />
      <hr></hr>
      <Contacus />
      
    </div>
  );
};

export default LandingPage;
