import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MapContact from '../Components/MapContact';
import credentials from '../credentials';

const useStyles = makeStyles((theme) => ({
  titles:{
    color:'white',
    fontWeight: 'bold',
    fontSize: '4em',
    margin:'30px 0px'
  },
  address:{
    color: 'white',
    fontSize: '1.5em'
  },
  links: {
    marginRight: theme.spacing(20),
    color: 'white',
    fontWeight: 'bold',
    margin: '0px 0px 50px 0px'
  },
  btntitle: {
    fontSize: '2em',
    margin: '10px'
  }
}));

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

export default function Contact() {
  var styles = useStyles();

  return(
    <div>
      <Typography className={styles.titles}>Visítanos en...</Typography>
      <Typography className={styles.address}>Miguel Ángel #521 Jardines de Oriente, León, Guanajuato</Typography>
      <MapContact googleMapURL= {mapURL}
        containerElement={ <div style={{height: '400px'}}/>}
        mapElement={<div style={{height: '400px'}}/>}
        loadingElement={<p>Cargando</p>}
      />
      <Typography className={styles.titles}>Información de contacto:</Typography>
      <Button component="a" className= {styles.links}
      href="https://www.facebook.com/Teoremaz-Escuela-de-Matemáticas-221217985078727/?__tn__=%2Cd%2CP-R&eid=ARAMgB2UIOWuLpKgz312WGKTA8wIzwPxZNhGk95Z1yloLPZsKOFPChq8GIYrMzSxexMDZd3IbM3XnczU">
          <FacebookIcon/>
          <Typography className={styles.btntitle}>
            /Teoremaz-Escuela-de-Matemáticas
          </Typography>
      </Button>
      <Button className= {styles.links}>
          <WhatsAppIcon/>
          <Typography className={styles.btntitle}>
            +52 1 477 808 8353
          </Typography>
      </Button>
    </div>
  )
}