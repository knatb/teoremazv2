import React from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { searchServices } from '../Actions/service';
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
    height: '120px',
    width: '49%'
  },
  titlesO: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly'
  },
  titleSub: {
  fontSize: '4.5em',
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
  },
  coursesContainer: {
    overflow: 'scroll',
    height: '65vh'
  },
  courseCardContainer: {
    margin: 5
  }
}));

export default function Account() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const user = useSelector((state) => _.get(state, "user.results"));
  const createdUser = useSelector((state) => _.get(state, "createUser.results"));
  let history = useHistory();
  const Services = useSelector((state) => _.get(state, 'service.result'));

  if(!Services){
    dispatch(searchServices());
  }

  if(!user) {
    history.push('/signin')
  }

  if(createdUser) {
    dispatch(createUserReset());
  }  

  return (
    <Grid className={classes.root} >    
        <Grid item className={classes.titlesO}>
          <Paper xs={6} spacing={3} className={classes.paperSubject}>
            <Typography className={classes.titleSub}>Mi Cuenta</Typography>            
          </Paper>
          <Paper xs={6} spacing={3} className={classes.paperSubject}>
            <Typography className={classes.titleSub}>Mis Cursos {user?.courses.length > 1 ? `(${user?.courses.length})`: ''}</Typography>
          </Paper>
        </Grid>
        <Grid container spacing={3}>        
          <Grid item xs>
            <CardAccount />
          </Grid>
          <Grid item xs> { Validar() } </Grid> 
        </Grid>     
    </Grid>
  );

  function Validar () {
    if(user && Services){
      let courseList = [];
      if (user.courses.length !== 0) {
        for (var b = 0; b < user.courses.length; b++) {
          for (var c = 0; c < Services.length; c++)
          if (user.courses[b] === Services[c].id)
            courseList.push(Courses(Services[c]));
        }
        return (
          <div>
            <div className={classes.coursesContainer}>
            {courseList}
          </div>
          </div>
          
        );
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
    //dispatch(searchServiceById({ course }));
    return (
      <div className={classes.courseCardContainer} key={course.id}>
        <CardCourses {...course}/>
      </div>
    )
  }
}