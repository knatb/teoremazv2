import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    color: 'white'
  }
}))

export default function PaymentForm() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className={classes.title}>
          Método de pago
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Titular" fullWidth autoComplete="cc-name" className={classes.title}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Numero de Tarjeta"
            fullWidth
            autoComplete="cc-number"
            className={classes.title}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Fecha de Expiración" fullWidth autoComplete="cc-exp" className={classes.title}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
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
            control={<Checkbox name="saveCard" value="yes" />}
            label="Recordar los datos"
            className={classes.title}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}