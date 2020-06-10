import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import PaymentMethod from '../Pages/PaymentMethod';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    position: 'center',
    padding: theme.spacing(2),
    margin: 'auto',
    alignItems: 'center',
    maxWidth: '100%',
    backgroundColor: '#646464b3',
    color: 'white',
    borderRadius: '30px'
  },
  image: {
    width: 200,
    height: 250,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
 
  titles: {
    fontWeight: 'bold'
  }, 
  button: {
    margin: theme.spacing(1),
    background: '#D6770F',
    color: 'white',
    width: 100,
    height: 50
  },
}));

export default function ComplexGrid(props) {
  const classes = useStyles();

  const{
    imageurl,
    name,
    description, 
    duracion, 
    costo
  } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={imageurl} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" className={classes.titles}>
                  {name}
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.titles}>
                {duracion}
                </Typography>
                <Typography variant="subtitle1" className={classes.titles}>
                  {costo}
                  </Typography >
                <Typography variant="body2">
                {description}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>              
               <Button variant="contained" className={classes.button} component={NavLink} to="/payment">
                  Comprar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}