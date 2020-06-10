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
    color: theme.palette.text.secondary
  },
  button: {
   margin: theme.spacing(1),
   background: '#8e24aa',
   width: '100%',
   color: 'White', 
   '&:hover': {
    backgroundColor: 'White',
    color: 'Black'
},
   alignContent: 'center',
   alignItems: 'center',
   justifyContent: 'center'
 },
 expansionPanel:{
   background: '#590379',
   color: 'White',
 },
 grid: {
   alignContent: 'center',
   alignItems: 'center',
   alignText: 'center',
   justifyContent: 'center'
 },
 paperSubject: {
   color: 'white',
   background: '#D6770F',
   textAlign: 'center',
   margin: '10px 0px 0px 0px',
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

  return (
    <div className={classes.root}>
      <Paper className={classes.paperSubject}>
        <Typography className={classes.titleSub}>MATERIAS</Typography>
      </Paper>
      <ExpansionPanel className={classes.expansionPanel} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>CALCULO</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionPanel} >
         <Grid className={classes.grid}>
            <Button className={classes.button}>
              Integral
            </Button>
            <Button className={classes.button}>
              Diferencial
            </Button>
            <Button className={classes.button}>
              Limites
            </Button>
         </Grid>
        
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expansionPanel} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>ALGEBRA</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionPanel} >
         <Grid>
            <Button className={classes.button}>
             Ecuaciones exponenciales
            </Button>
            <Button className={classes.button}>
            Productos notables
            </Button>
            <Button className={classes.button}>
            Fracciones algebraicas
            </Button>
         </Grid>
        
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expansionPanel} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>QUIMICA</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionPanel} >
         <Grid>
            <Button className={classes.button}>
            El método científico
            </Button>
            <Button className={classes.button}>
            Ácidos y bases
            </Button>
            <Button className={classes.button}>
            Solubilidad
            </Button>
         </Grid>
        
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expansionPanel} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>BIOLOGIA</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionPanel} >
         <Grid>
            <Button className={classes.button}>
               Bioquimica
            </Button>
            <Button className={classes.button}>
               BOTANICA
            </Button>
            <Button className={classes.button}>
               ECOLOGIA
            </Button>
         </Grid>
        
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expansionPanel} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>FISICA</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionPanel} >
         <Grid>
            <Button className={classes.button}>
               Dinámica
            </Button>
            <Button className={classes.button}>
               Termodinamica
            </Button>
            <Button className={classes.button}>
               Electrostática
            </Button>
         </Grid>
        
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
    </div>
  );
}