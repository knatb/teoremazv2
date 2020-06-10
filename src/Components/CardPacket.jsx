import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

//import FALLBACK_IMAGE from 'src/images/albert.png';
//const onMediaFallback = event => event.target.src = FALLBACK_IMAGE;
const useStyles = makeStyles({
  CardMedia: {
    borderRadius: '20',
    height: '140'
  },
  Card: {
    width: '275',
    variant: 'outlined',
    borderRadius: '50px 50px 20px 20px',
    backgroundColor: '#646464b3'
  },
  titles: {    
    color: 'white'
  },
  btnInfo: {
    background: '#D6770F'
  }
});

export default function MediaCard(props) {

  var styles = useStyles();

  const{
    imageurl,
    name,
    description
  } = props;

  return (
    <Card className={styles.Card} key="{id}">
      <CardActionArea>
        <CardMedia className={styles.CardMedia} component="img" image={imageurl}>
        </CardMedia>
        <CardContent>
          <Typography className={styles.titles} gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography className={styles.titles} variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  className={styles.btnInfo} component={NavLink} to="/services">
          <Typography  size="small" color="primary" className={styles.titles}>
          MÁS INFORMACIÓN
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};
