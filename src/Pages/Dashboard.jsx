import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '../Components/CardPacket';
import { makeStyles } from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MyCarousel from '../Components/Carousel';

const useStyles = makeStyles({
  GridStyle: {
    margin: '50px',
    alignItems: 'center',
    justifyContent: ''
  },
  avatars: {
    height: '250px'
  },
  titulos: {
    color: 'white',
    fontSize: '3em',
    textAlign: 'center',
    fontWeight: 'inherit'
  },
  paragraph: {
    color: 'white',
    textAlign: 'center'
  },
  cardContainer: {
    background: '#D6770FCC',
    height: '100%',
    padding: '20px',
    margin: '20px'
  }
});

export default function Dashboard() {
  var styles = useStyles();
  
  return ( 
   <div>
    <MyCarousel />
    <Grid container spacing={3} bgcolor="warning-main">

      <Grid item xs={12} sm={4} md={4}>
      <Card           
          name="IPN - UG"
          imageurl={require('../images/PAQUETE1.png')}
          description="Preparate para tu examen de admisión con este curso propedéutico"
        />
      </Grid>
      
      <Grid item xs={12} sm={4} md={4}>
      <Card 
          name="UNAM"
          imageurl={require('../images/PAQUETE2.png')}
          description="Preparate para tu examen de admisión con este curso propedéutico"
        />
      </Grid>

      <Grid item xs={12} sm={4} md={4}>
        <Card 
          name="ITL - UTL"
          imageurl={require('../images/PAQUETE3.png')}
          description="Preparate para tu examen de admisión con este curso propedéutico"
        />
      </Grid>
    </Grid>

    <Grid container className={styles.GridStyle}>     
     
      <Grid item md={3}>
        <img className={styles.avatars} alt="avatar" src={require('../images/monito.png')}></img>
      </Grid>
      <Grid item md={8} >        
      <Typography variant='h2' className={styles.titulos}>¿QUÉ FOMENTAMOS EN TEOREMAZ?</Typography>
        <Paper className={styles.cardContainer}>
          <Typography variant="body1" className={styles.paragraph}>
            Teoremaz fomenta el aprendizaje de sus alumnos adaptándose a las necesidades del mismo, 
            sabemos que las matemáticas son para la mayoría de los estudiantes en la actualidad un problema común. 
            Esto debido a que posiblemente no se fundamentaron bien las bases de las mismas o porque los estudiantes no demuestran interés por ellas.
            Así que en teoremaz buscamos explicar fuera del método tradicional para adaptarnos a distintas formas de enseñanza en la cual el alumno logre comprender los conceptos que necesita.
          </Typography> 
        </Paper>
      </Grid>      
    </Grid>

    <Grid container className={styles.GridStyle}>
      <Grid item md={8}>        
      <Typography className={styles.titulos}>PUEDES ENCONTRAR...</Typography>
        <Paper className={styles.cardContainer}>
          <Typography variant='body1' className={styles.paragraph}>
            Inicialmente teoremaz empleó el servicio de asesorías personalizadas, actualmente contamos también con los servicios de 
            propedéuticos para examen de admisión de universidad y sistema no escolarizado de prepa abierta y prepa en un solo examen, 
            aprovechando las plataformas digitales e interactivas para la comprensión de los temas en sus respectivos exámenes.
          </Typography>
        </Paper>
      </Grid>
      <Grid item md={4}>
        <img className={styles.avatars} alt="avatar" src={require('../images/albert.png')}></img>
      </Grid>
    </Grid>
    </div>
  );
}
