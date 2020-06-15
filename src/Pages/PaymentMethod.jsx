import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PaymentForm from '../Payment/PaymentForm';
import Review from '../Payment/Review';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
    backgroundColor: '#ffffff91'
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
    backgroundColor: '#64646400',
    color: 'white'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),    
    backgroundColor: '#D6770F',
  },
  avatars: {
    height: '200px'
  },
  gracias: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  gracias2: {
    alignItems: 'center',

  },
  accbtn: {     
    backgroundColor: '#D6770F',
    color: 'white'
  }
}));

const steps = ['Método de pago', 'Resumen de orden'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PaymentForm />;
    case 1:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  let history = useHistory();

  const [activeStep, setActiveStep] = React.useState(0);
  const [idselected] = React.useState();
  console.log(idselected)

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleAccount = () => {
    history.push('/account');
  }

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <div className={classes.gracias}>                
                  <img className={classes.avatars} alt="avatar" src={require('../images/monito.png')}/>
                </div>
                <div className={classes.gracias2}>
                <Typography variant="h5" gutterBottom>
                  Gracias por elegirnos!
                </Typography>
                <Typography variant="subtitle1">
                Tu compra se ha realizado con exito, esperamos que disfrutes de todos los servicios que te ofrece teoremaz
                </Typography>
                <Button onClick={handleAccount} classname={classes.accbtn}>Ir a mi cuenta</Button>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Regresar
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finalizar orden' : 'Siguiente'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        {/*<Copyright />*/}
      </main>
    </React.Fragment>
  );
}