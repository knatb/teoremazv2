import React, { useEffect } from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { searchServiceById } from '../Actions/service';
import { createUserReset } from '../Actions/user';
// Routing
import { useHistory } from 'react-router-dom';
// Components
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardAccount from '../Components/CardAccount';
import Button from '@material-ui/core/Button';
import CardCourses from '../Components/CardMyCourses';
import { NavLink} from 'react-router-dom';

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
  },
  button: {
    margin: theme.spacing(1),
    background: '#D6770F',
    color: 'white',
    width: 100,
    height: 50,
    verticalAlign : 'center'
  },
  needbuy: {
    color: 'white',
    textAlign: 'center'
  },
  centered:
  {
    alignContent: 'center',
    textAlign: 'center'
  },
  Imagen: {
    height: '100px',
    width: '75px'
  }
}));

export default function Account() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const user = useSelector((state) => _.get(state, "user.results"));
  const createdUser = useSelector((state) => _.get(state, "createUser.results"));
  let history = useHistory();

  if(!user) {
    history.push('/signin')
  }

  if(createdUser) {
    dispatch(createUserReset());
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
            <CardAccount />
          </Grid>
          <Grid item xs>
          {Validar()}
          </Grid> 
        </Grid>     
    </Grid>
  );

  function Validar () {
    if(user){
    if (user.courses.length !==0) {
      for (var b = 0; b<user.courses.length; b++) {
        return Courses(user.courses[b]);
      }
    }
    else{
    return (
      <Grid className={classes.centered}>
      <Typography variant='h3' className={classes.needbuy}>Usted no cuenta con ningun servicio comprado</Typography>
      <Typography variant='subtitle2' className={classes.needbuy}>Adquiere un servicio dando click en el siguiente boton</Typography>
      <Button variant="contained" className={classes.button} component={NavLink} to='/services'>
           Servicios
        </Button>
      </Grid>
    
    );
    }
  }
  }

  function Courses (course) {
    useEffect(() => {
      dispatch(searchServiceById({ course }));
    });
    const result = useSelector(state => _.get(state, 'servicebyid.result'));
    // console.log(result)
    return (
      <div>
        <CardCourses {...result}/>
      </div>
    )
  }
}