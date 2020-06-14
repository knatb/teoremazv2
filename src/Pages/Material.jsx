import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SubjectList from '../Components/SubjectList';
import { makeStyles } from '@material-ui/core/styles';
import Iframe from '../Components/Iframe';

//Redux
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { flexbox } from '@material-ui/system';

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
      minHeight: '500px',
      aligncenter: 'center'
    },
    pdf: { }
})

export default function Material(props) {
  var styles = useStyles();

  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  const [pdfUrl, setPdfUrl] = useState('https://arxiv.org/pdf/quant-ph/0410100.pdf');

  const buttons = useSelector(state => _.get(state, 'setMaterial.materials'));

  function ButtonLeccion(props) {
    return (
    <Button 
      className={styles.button}
      onClick={() => {setPdfUrl(`${proxyUrl}${props.toPdf}`)}}>
        {props.Text}
     </Button>
    );
  }

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
          <Grid item>
            {buttons.map((item, index) => (<ButtonLeccion key={index} Text={item.name} toPdf={item.link}/>)) }
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}


