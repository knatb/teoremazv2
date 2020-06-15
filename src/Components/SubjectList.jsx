import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Redux
import { useDispatch } from 'react-redux';
import { setMaterial } from '../Actions/material'


//#400057 #b7027b81 #590379
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: '33.33%',
    flexShrink: 0,
    fontWeight: 'bold',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: 'red' //theme.palette.text.secondary
  },
  button: {
    margin: '10px 2px',
    background: '#8e24aa',
    //width: '100%',
    color: 'White', 
    '&:hover': {
      backgroundColor: 'White',
      color: 'Black'
    }
  },
  expansionPanel:{
    background: '#590379',
    color: 'White',
    padding: '0px'
  },
  grid: {
    width: '100%',
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  paperSubject: {
    color: 'white',
    background: '#D6770F',
    textAlign: 'center',
    margin: '10px 0px 10px 0px',
    height: '40px'
  },
  titleSub: {
    fontSize: '1.5em',
    fontWeight: 'bold'
  }
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const dispatch = useDispatch();
  /*
  https://proyecto-1.s3.amazonaws.com/Algebra-CONAMAT.pdf
  https://proyecto-1.s3.amazonaws.com/Calculo-Diferencial.pdf
  https://proyecto-1.s3.amazonaws.com/Cálcuclo-Patria.pdf
  https://proyecto-1.s3.amazonaws.com/Cálculo-Integral.pdf
  https://proyecto-1.s3.amazonaws.com/Cálculo-Schaum.pdf
  https://proyecto-1.s3.amazonaws.com/Física por Paule Tippens 7ma Edicion revisada.pdf
  https://proyecto-1.s3.amazonaws.com/Tortora-Anatomia_y_fisiologia_humana.pdf
*/
  const updateButtons = (array) => {
    dispatch(setMaterial(array))
  }

  //Objecto general

  var Calculo = [
    {
        name: 'Calculo Diferencial I',
        link: 'https://proyecto-1.s3.amazonaws.com/Calculo-Diferencial.pdf'
    },
    {
        name: 'Caculo Patria',
        link: 'https://proyecto-1.s3.amazonaws.com/Cálcuclo-Patria.pdf'
    },
    {
        name: 'Calculo Integral',
        link: 'https://proyecto-1.s3.amazonaws.com/Cálculo-Integral.pdf'
    },
    {
        name: 'Calculo Schaum',
        link: 'https://proyecto-1.s3.amazonaws.com/Cálculo-Schaum.pdf'
    },
  ]
  var Algebra = [
    {
        name: 'Algebra Conamat',
        link: 'https://proyecto-1.s3.amazonaws.com/Algebra-CONAMAT.pdf'
    }
  ]
 var Fisica = [
    {
      name: 'Fisica por Paule Tippens',
      link: 'https://proyecto-1.s3.amazonaws.com/Física por Paule Tippens 7ma Edicion revisada.pdf'
    },
  ]
 var Biología = [
    {
      name: 'Anatomía y Fisiología',
      link: 'https://proyecto-1.s3.amazonaws.com/Tortora-Anatomia_y_fisiologia_humana.pdf'
    }
 ]


  return (
    <div className={classes.root}>
      <Paper className={classes.paperSubject}>
        <Typography className={classes.titleSub}>MATERIAS</Typography>
      </Paper>
      {/* Matemáticas */}
      <ExpansionPanel className={classes.expansionPanel} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <Typography className={classes.heading}>Matemáticas</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionPanel} >
         <Grid className={classes.grid}>
            <Button className={classes.button}  onClick={() => {updateButtons(Calculo)}}>
              Cálculo Integral
            </Button>
            <Button className={classes.button}  onClick={() => {updateButtons(Calculo)}}>
              Cálculo Diferencial
            </Button>
            <Button className={classes.button}  onClick={() => {updateButtons(Algebra)}}>
              Álgebra
            </Button>
         </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {/* Algebra 
      <ExpansionPanel className={classes.expansionPanel} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header">
          <Typography className={classes.heading}>ÁLGEBRA</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionPanel} >
         <Grid className={classes.grid}>
            <Button className={classes.button} onClick={() => (updateButtons(Algebra))}>
             Ecuaciones exponenciales
            </Button>
            <Button className={classes.button} onClick={() => ({})}>
            Productos notables
            </Button>
            <Button className={classes.button} onClick={() => ({})}>
            Fracciones algebraicas
            </Button>
         </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
       Ciencias Exactas y Naturales */}
      <ExpansionPanel className={classes.expansionPanel} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header">
          <Typography className={classes.heading}>Ciencias Exactas y Naturales</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionPanel} >
         <Grid className={classes.grid}>
            <Button className={classes.button} onClick={() => (updateButtons(Fisica))}>
              Física
            </Button>
            <Button className={classes.button} onClick={() => (updateButtons(Biología))}>
              Biología
            </Button>
         </Grid>        
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {/* Biologia 
      <ExpansionPanel className={classes.expansionPanel} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header">
          <Typography className={classes.heading}>BIOLOGÍA</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionPanel} >
         <Grid className={classes.grid}>
            <Button className={classes.button} onClick={() => ({})}>
               Bioquimica
            </Button>
            <Button className={classes.button} onClick={() => ({})}>
               BOTANICA
            </Button>
            <Button className={classes.button}  onClick={() => ({})}>
               ECOLOGIA
            </Button>
         </Grid>
        
        </ExpansionPanelDetails>
      </ExpansionPanel>
       Fisica 
      <ExpansionPanel className={classes.expansionPanel} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header">
          <Typography className={classes.heading}>FÍSICA</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionPanel} >
         <Grid className={classes.grid}>
            <Button className={classes.button}  onClick={() => ({})}>
               Dinámica
            </Button>
            <Button className={classes.button}  onClick={() => ({})}>
               Termodinamica
            </Button>
            <Button className={classes.button}  onClick={() => ({})}>
               Electrostática
            </Button>
         </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      */}
    </div>
  );
}

