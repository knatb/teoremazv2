import React from 'react';
//Redux
import { useSelector } from 'react-redux';
import _ from 'lodash';
// Routing
import { useHistory } from 'react-router-dom';
// Components
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardAccount from '../Components/CardAccount';
import CardCourses from '../Components/CardMyCourses';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },  
  paperSubject: {
    color: 'white',
    background: '#D6770F',
    textAlign: 'center',
    margin: '20px 0px 20px 0px',
    height: '120px'
  },
  titleSub: {
  fontSize: '5em',
  fontWeight: 'bold'
  }
}));

export default function Account() {
  const classes = useStyles();

  const user = useSelector((state) => _.get(state, "user.results"));

  let history = useHistory();

  if(!user) {
    history.push('/signin')
  }

  return (
    <Grid className={classes.root} >    
        <Grid item>
          <Paper className={classes.paperSubject}>
            <Typography className={classes.titleSub}>Mi Cuenta</Typography>
          </Paper>
        </Grid>
        <Grid container spacing={3}>        
          <Grid item xs>
            <CardAccount      
              imageurl={require('../images/man-user.png')}
              username="ChrisNotDefined"
              email="chris@gmail.com"
              firstName="Christopher"
              lastName="Álvarez"
              password="meperd0nas"
            />
          </Grid>
          <Grid item xs>
            <CardCourses 
              imageUrl={require('../images/PAQUETE1.png')}
              name="IPN - UG"
              duration="4 meses"
              description="Te has inscritó al curso propedéutico para presentar tu examen de admisión en el Instituo Politecnico Nacional o la Universidad de Guanajuato! estudiarás las materias de tu temario en las cuales te proporcionaremos información con una guía digital, una guía interactiva y libros digitales para que puedas estudiar desde donde estés."

            />
          </Grid> 
        </Grid>     
    </Grid>
  );
}