import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
const useStyles = makeStyles((theme) => ({
    media: {
        height: 370,
        width:600,
    
      },
  }));
const Aboutus = () => {
    const classes = useStyles();
    return ( 
        <Grid container>
            <Grid item xs={6}>
            <Typography style={{marginLeft:"1.5rem"}}>
            <h1>About academy of Excellence</h1>
            </Typography>
            <Typography style={{marginLeft:"1.5rem"}}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quam veniam 
                    minima labore eius quae officia fugiat asperiores 
                    itaque quas nostrum aliquid, cum earum illo animi saepe numquam nulla non.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam 
                voluptatem minus provident molestias ipsum, nihil fugit neque illum ut odit non
                 sapiente eos laudantium. Accusantium velit porro doloribus doloremque.</p>
            </Typography>
            
            </Grid>
            <Grid item xs={4}>
            <Typography style={{marginLeft:"6rem"}}> 
            <CardMedia
            className={classes.media}
            image="./about.jpg"
            title="Aboutus"
          />
            </Typography> 
            
        
            
            </Grid>
        </Grid>
        );
}
 
export default Aboutus;