import React, { useState, useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { createUserReq } from '../Actions/user';
import _ from 'lodash';
// Page routing
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// Componnets
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress  from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),    
    marginBottom: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'white',
    padding: "8px",
    borderRadius: "5px",
    backgroundColor: '#ffffffc7'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#b7027b81'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#D6770F',
    color: 'white'
  },
  text: {
    color: 'white'
  },
  passError: {
    margin: 'auto',
    opacity: isValid => !isValid
  },
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '60%'
  }
}));

export default function SignUp() {

  // Data state
  const [txtName, setTxtName] = useState('');
  const [txtLName, setTxtLName] = useState('');
  const [txtUserName, setTxtUserName] = useState('');
  const [txtEMail, setTxtEmail] = useState('');
  const [txtPassword, setTxtPassword] = useState('');
  const [txtRepeatPass, setTxtRepeatPass] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [passwordValid, setPassValid] = useState(true);

  const classes = useStyles(passwordValid);

  // Redux Caller
  const dispatch = useDispatch();

  // Routing calling
  let history = useHistory();

  const user = useSelector((state) => _.get(state, "user.results"));
  const loading = useSelector((state) => _.get(state, "createUser.loading"));

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

  useEffect(() => {
    if(user){
      history.push('/account')
    }
  });

  const registerHandler = () => {
    dispatch(createUserReq({
      username: txtUserName,
      email: txtEMail,
      completeName: `${txtName} ${txtLName}`,
      password: txtPassword,
      courses: []
    }));
  }

  return (
    <Grid>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
                REGISTRARSE
          </Typography>
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
            <Typography style={{opacity: Number(!passwordValid)}} variant='body2' color='error'> 
              Las contraseñas no coinciden 
            </Typography>
            <Button
              disabled = {!isValid || loading}
              fullWidth
              variant="contained"
              color="#D6770F"
              className={classes.submit}
              onClick={registerHandler}
            >
              { loading ? (<div className={classes.loadingContainer}><CircularProgress style={{color: '#a34700'}}/><Typography>CARGANDO</Typography></div>) : 'REGISTRARSE'}
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
              <NavLink 
                variant="body2" 
                as={NavLink} 
                to="/signin">
                ¿YA TIENES CUENTA? INICIA SESIÓN
              </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Grid>
  );
}