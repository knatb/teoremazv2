import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  grid: {
    background: "#343434",
    position: "sticky",
    padding: '15px 30px',
    margin: '30px 0px 0px 0px'
  },
  footer : {    
    color: 'white',
    fontSize: '1.2em'
  }
});

export default function Footer() {
  var styles = useStyles();

  return(
    <div>
      <Grid className={styles.grid}>
        <Typography className={styles.footer}>Todos los derechos reservados © 2020 Teoremaz Escuela de Matemáticas</Typography>        
        <Typography className={styles.footer}>JAVIER MADRAZO ORTÍZ</Typography>
        <Typography className={styles.footer}>ANDREA ANAHÍ ORDAZ NOVA</Typography>
        <Typography className={styles.footer}>KENNETH ARTABAN LÓPEZ LÓPEZ</Typography>
        <Typography className={styles.footer}>CHRISTOPHER ÁLVAREZ PICHARDO</Typography>
        <Typography className={styles.footer}>VICTOR MANUEL VELAZQUEZ FUENTES</Typography>
      </Grid>
    </div>
  )
}


