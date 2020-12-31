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
const Aboutinfo = () => {
    const classes = useStyles();
    return ( <Card className={classes.root}>
        <CardActionArea>
            
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              About US
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                 Academy of Excellence 1.5 KM manga Road ,Off M ultan Road
                 Lahore Pakistan
            </Typography>
            <Typography >
                 <p><b>Email</b>academyofexcellence@gmail.com</p>
                 <p><b>Phone</b>+923114128859</p>
                 <p><b>fax</b>+92 (42) 99203101</p>

            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
    );
}
 
export default Aboutinfo;