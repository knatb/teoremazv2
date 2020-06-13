import React, { useState, useEffect }  from 'react';
// Redux
import { useDispatch } from 'react-redux';
import { createUserReq } from '../Actions/user';
//components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    position: 'center',
    padding: theme.spacing(2),
    margin: 'auto',
    alignItems: 'center',
    maxWidth: '100%',
    backgroundColor: '#646464b3',
    color: 'white',
    borderRadius: '30px'
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '50%',
    maxHeight: '50%',
  },
 
  titles: {
    fontWeight: 'bold',
    fontSize: '1.2em'
  }, 
  button: {
    margin: theme.spacing(2),
    background: '#D6770F',
    color: 'white',
    width: 160,
    height: 50
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  account: {      
    flexDirection: 'column',
    alignItems: 'center',
    }
}));

export default function CardAccount(props) {
  const classes = useStyles();
 // Data state
 const [txtName, setTxtName] = useState('');
 const [txtLName, setTxtLName] = useState('');
 const [txtUserName, setTxtUserName] = useState('');
 const [txtEMail, setTxtEmail] = useState('');
 const [txtPassword, setTxtPassword] = useState('');
 const [txtRepeatPass, setTxtRepeatPass] = useState('');
 const [isValid, setIsValid] = useState(false);
 const [passwordValid, setPassValid] = useState(true);

 const dispatch = useDispatch();

 useEffect(() => {
   setIsValid(
     txtName.length > 0 && 
     txtLName.length > 0 &&
     txtUserName.length > 0 &&
     txtEMail.length > 0 &&
     txtPassword.length > 0 &&
     txtRepeatPass.length > 0 &&
     passwordValid);
 });

  const{
    imageurl,
    username,
    firstName,
    lastName,
    email, 
    password
  } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField              
                value={txtName}
                name="firstName"
                autoComplete="fname"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombre(s)"
                autoFocus
                onChange={ e => {setTxtName(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={txtLName}
                name="lastName"
                autoComplete="lname"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellidos"
                onChange={e => {setTxtLName(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={txtUserName}
                name="username"
                autoComplete="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Nombre de Usuario"
                onChange={e => {setTxtUserName(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={txtEMail}
                name="email"
                autoComplete="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                onChange={e => {setTxtEmail(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={txtPassword}
                name="password"
                variant="outlined"
                required
                fullWidth
                type="password"
                id="password"
                label="Contraseña"
                onChange={e => {
                  setTxtPassword(e.target.value);
                  setPassValid(e.target.value === txtRepeatPass)
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={txtRepeatPass}
                variant="outlined"
                name="password"
                required
                fullWidth
                type="password"
                id="password"
                label="Repite tu contraseña"
                onChange={e => {
                  setTxtRepeatPass(e.target.value);
                  setPassValid(e.target.value === txtPassword)
                }}
              />
            </Grid>
          </Grid>
          <div className={classes.buttonGroup}>
              <ButtonGroup aria-label="outlined secondary button group">
                <Button variant="contained" className={classes.button}>Editar Cuenta</Button>
                <Button variant="contained" className={classes.button}>Cerrar Sesión</Button>
                <Button variant="contained" className={classes.button}>Eliminar Cuenta</Button>
              </ButtonGroup>
            </div>
        </form>
      </Paper>
    </div>
  );
}