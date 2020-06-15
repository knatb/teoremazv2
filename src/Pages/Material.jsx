import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SubjectList from '../Components/SubjectList';
import { makeStyles } from '@material-ui/core/styles';
import Iframe from '../Components/Iframe';

//Redux
import _ from 'lodash';
import { useSelector } from 'react-redux';

import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
/*
https://proyecto-1.s3.amazonaws.com/Algebra-CONAMAT.pdf
https://proyecto-1.s3.amazonaws.com/Calculo-Diferencial.pdf
https://proyecto-1.s3.amazonaws.com/Cálcuclo-Patria.pdf
https://proyecto-1.s3.amazonaws.com/Cálculo-Integral.pdf
https://proyecto-1.s3.amazonaws.com/Cálculo-Schaum.pdf
https://proyecto-1.s3.amazonaws.com/Física por Paule Tippens 7ma Edicion revisada.pdf
https://proyecto-1.s3.amazonaws.com/Tortora-Anatomia_y_fisiologia_humana.pdf
*/

const useStyles = makeStyles({
  buttons: {
    width: '48%',
    color: 'white',
    background: '#2F0055',
    margin: '8px 0px 0px 0px',
    border: '3px solid #D6770F'
  },
  buttonsContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  },
  button: {
    background: '#8e24aa',
    width: '250px',
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
      color: 'white',
      background: '#2F0055',
      margin: '8px 0px 0px 0px',
      border: '4px solid #D6770F',
      minHeight: '500px',
      aligncenter: 'center'
    },
    pdf: { },
    blockedContainer:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '50vw',
      margin: 5,
      background: '#343434CC',
      color: 'white'
    },
    blockedText: {
      margin: 5,
      fontSize: '2em'
    }
})

export default function Material() {
  var styles = useStyles();
  let history = useHistory();

  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  const [pdfUrl, setPdfUrl] = useState('https://arxiv.org/pdf/quant-ph/0410100.pdf');

  const buttons = useSelector(state => _.get(state, 'setMaterial.materials'));
  const user = useSelector(state => _.get(state, 'user.results'));

  function ButtonLeccion(props) {
    return (
    <Button
      className={styles.button}
      onClick={() => {setPdfUrl(`${proxyUrl}${props.toPdf}`)}}>
        {props.Text}
     </Button>
    );
  }

  if (user)
  return (
    <Grid container spacing={3}>
      {/* Listado de materias */}
      <Grid item xs>
        <SubjectList />
      </Grid>
      {/* {Botones y el pdf} */}
      <Grid item xs={12} md={6}>
        <div className={styles.buttonsContainer}>
          <Button className={styles.buttons}>Recursos</Button>
          <Button className={styles.buttons}>Ejercicios</Button>
        </div>
        <Iframe src={pdfUrl}></Iframe>
      </Grid>
      <Grid item xs> 
        <Grid container spacing={3} className={styles.books}>
          <Grid item >
            {buttons.map((item, index) => (<ButtonLeccion key={index} Text={item.name} toPdf={item.link}/>)) }
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
  else
  return (
    <div className={styles.blockedContainer}>
      <Typography className={styles.blockedText}>
        DEBES INICIAR SESIÓN PARA ACCEDER A LOS MATERIALES DE ESTUDIO
      </Typography>
      <Button onClick={() => {history.push('/signin')}} className={styles.button}>
        INICIAR SESIÓN
      </Button>
    </div>
  );
}


