import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor:"#FC6DAB"
  },
  media: {
    height: 50,
    width:50,

  },
});
const Examinations = () => {
    const classes = useStyles();
    return ( <Card className={classes.root}>
        <CardActionArea>
            <Typography style={{marginLeft:"5.5rem"}}>
            <CardMedia 
            className={classes.media}
            image="./examination (1).png"
            title="Examinations"
          />
            </Typography>
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Examinations
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
}
 
export default Examinations;