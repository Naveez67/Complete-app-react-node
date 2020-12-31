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
    backgroundColor:"skyblue"
  },
  media: {
    height: 50,
    width:50,

  },
});
const Reachus = () => {
    const classes = useStyles();
    return ( <Card className={classes.root}>
        <CardActionArea>
            
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Admission office
            </Typography>
            <Typography >
                 <p><b>Email</b>academyofexcellence@gmail.com</p>
                 <p><b>Phone</b>+923114128859</p>
                 <p><b>fax</b>+92 (42) 99203101</p>

                 <Typography style={{marginBottom:"1rem"}}>
                 <p><b>Whatsapp</b>+92 3112128859</p>
                 </Typography>
                 
                
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
    );
}
 
export default Reachus;