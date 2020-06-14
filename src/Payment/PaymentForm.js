import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    color: 'black'
  }
}))

const CssTextField = withStyles({
  root: {    
    '& label.Mui-focused': {
      color: '#b82204',
    },    
    '& .MuiInput-underline:after': {
      borderBottomColor: '#D6770F',
    },
  },
})(TextField);

export default function PaymentForm() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h6" gutterBottom className={classes.title}>
          Método de pago
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CssTextField required id="cardName" label="Titular" fullWidth autoComplete="cc-name" className={classes.title}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <CssTextField
            required
            id="cardNumber"
            label="Numero de Tarjeta"
            fullWidth
            autoComplete="cc-number"
            className={classes.title}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CssTextField required id="expDate" label="Fecha de Expiración" fullWidth autoComplete="cc-exp" className={classes.title}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <CssTextField
            required
            id="ccv"
            label="CCV"
            fullWidth
            autoComplete="cc-csc"
            className={classes.title}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox name="saveCard" value="yes" color='default' />}
            label="Recordar los datos"
            className={classes.title}
          />
        </Grid>
      </Grid>
      </div>
  );
}