import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SubjectList from '../Components/SubjectList';
import { makeStyles } from '@material-ui/core/styles';
import Iframe from '../Components/Iframe';

const useStyles = makeStyles({
  buttons: {
    width: '298px',
    color: 'white',
    background: '#2F0055',
    margin: '8px 0px 0px 0px',
    border: '3px solid #D6770F'
  },
 button: {
   background: '#8e24aa',
   width: '100%',
   color: 'White',
      '&:hover': {
        backgroundColor: 'White',
        color: 'Black'
    },
   alignContent: 'center',
   alignItems: 'center',
   justifyContent: 'center',
   margin: '3px 3px 3px 3px',
        
  
 },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  books: {
    width: '298px',
    color: 'white',
    background: '#2F0055',
    margin: '8px 0px 0px 0px',
    border: '4px solid #D6770F',
    height: '500px',
    aligncenter: 'center'
  },
  pdf: {

  }
})

export default function Material(props) {
  var styles = useStyles()

  return (
    <Grid container spacing={3}>

      <Grid item xs>
      <SubjectList />
      </Grid>
       
      <Grid item xs={6}>
        <Button className={styles.buttons}>Recursos</Button>
        <Button className={styles.buttons}>Ejercicios</Button>
      
      </Grid>
      <Grid item xs>      
        <Grid container spacing={3} className={styles.books}>
          <Grid item>
            <Button className={styles.button}>
              Prueba 1
            </Button>
            <Button className={styles.button}>
              Prueba 1
            </Button>
            <Button className={styles.button}>
              Prueba 1
            </Button>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  )
}
