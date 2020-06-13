import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';
import ProgressBar from './ProgressBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'scroll'
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
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '50%',
    maxHeight: '50%',
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
  courses: {
    flexDirection: 'column',
    alignItems: 'center',
  }
}));


export default function CardCourses(props) {
  const classes = useStyles();

  const{
    imageUrl,
    name,
    duration,
    description,

  } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid alignItems="center" spacing={2}>
          <Grid item >
              <img className={classes.img} alt="course" src={imageUrl}/>
          </Grid>
          <Grid item xs container direction="column" alignItems="center" className={classes.courses}>
            <Typography gutterBottom variant="subtitle1" className={classes.titles}>
            Curso: {name}</Typography>
            <Typography gutterBottom variant="body2" >
            Duración: {duration}</Typography>
            <Typography gutterBottom variant="subtitle1">
            {description}</Typography>
            <Typography gutterBottom variant="body2">
            Progreso: </Typography>
            <ProgressBar />
            </Grid>
        </Grid>
      </Paper>
    </div>
  );
}