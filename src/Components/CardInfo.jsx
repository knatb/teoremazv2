import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { searchServiceById } from '../Actions/service';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import _ from 'lodash';
import { NavLink} from 'react-router-dom';

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
  const dispatch = useDispatch();
  const user = useSelector((state) => _.get(state, "user.results"));
  const classes = useStyles();
  var texto = 'Comprar'
  const [idselected, setId] = useState('idSelected')
  useEffect(() => {
       dispatch(searchServiceById({ idselected }));
  })

  // const sendRequest = useCallback(async () => {
  //   // don't send again while we are sending
  //   if (isSending) return
  //   // update state
  //   setIsSending(true)
  //   // send the actual request
  //   await API.sendRequest()
  //   // once the request is sent, update state again
  //   if (isMounted.current) // only update if we are still mounted
  //     setIsSending(false)
  // }, [isSending])
  var a = 0
  const{
    imageurl,
    name,
    description, 
    duration, 
    cost,
    id
  } = props;

  if(user){
    if (user.courses.length !==0) {
      for (var c = 0; c < user.courses.length; c++) {
        if (id === user.courses[c] ) {
          texto = 'Comprado';
          a = 1
        }
      }
    }
  }
  else {
    a=2
  }

  function GetService() {
    useEffect(() => {
      dispatch(searchServiceById({ id }));
    });
  }

    

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
                Duracion: {duration}
                </Typography>
                <Typography variant="subtitle1" className={classes.titles}>
                  Precio: ${cost} MXN
                  </Typography >
                <Typography variant="body2">
                {description}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>              
               {Activo()}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );

  function Activo() {
    if (a === 1) {
      return (
        <Button variant="contained" disabled className={classes.button} component={NavLink} to='/payment'>
           {texto}
        </Button>
      )
    }
    else if(a===2){
      return (
        <Button variant="contained" className={classes.button} component={NavLink} to='/signin'>
           {texto}
        </Button>
      )
    }
    else {
      return (
        <Button variant="contained" className={classes.button} onClick={() => setId(idselected === id )} component={NavLink} to='/payment'>
           {texto}
        </Button>
      )
    }
  }
}