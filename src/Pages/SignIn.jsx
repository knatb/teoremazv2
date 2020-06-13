import React, { useState, useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { searchUser } from '../Actions/user';
import qs from 'query-string';
import _ from 'lodash';
// Page routing Redirection
import { useHistory } from 'react-router-dom';
// Components
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress'

//https://stackoverflow.com/questions/52911169/how-to-change-the-border-color-of-material-ui-textfield
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
    backgroundColor: '#ffffffc7',
    margin: '20px 0px 20px 0px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#b7027b81'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#D6770F',
    color: 'white'
  },
  text: {
    color: 'white'
  },
  errorMsg: {
    color: '#b82204'
  },
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '60%'
  }
}));

export default function SignIn() {
  const classes = useStyles();
  let history = useHistory();

  const user = useSelector((state) => _.get(state, "user.results"));
  const loading = useSelector((state) => _.get(state, "user.loading"));

  useEffect(() => {
    if(user){
      history.push('/account');
    }
  });
  // Datos del Control
  const [txtUserN, setTxtUserN] = useState("");
  const [txtPass, setTxtPass] = useState("");
  
  const dispatch = useDispatch();

  const handleLogin = () => dispatch(searchUser({
    username: txtUserN,
    password: txtPass
  }));

  return (
    <Grid>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            INICIAR SESIÓN
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              value={txtUserN}
              name="username"
              autoComplete="username"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Nombre de Usuario"
              id="username"
              autoFocus
              onChange={(e) => {
                setTxtUserN(e.target.value);
              }}
            />
            <TextField
              value={txtPass}
              name="password"
              autoComplete="current-password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Contraseña"
              type="password"
              id="password"
              onChange={(e) => {
                setTxtPass(e.target.value);
              }}
            />
            {/* {<FormControlLabel
              control={<Checkbox value="remember"/>}
              label="Recordarme"
            />} */}
            { user === false && !loading ? (
              <div className={classes.errorMsg}>Usuario inválido, revisa tu nombre de usuario y contraseña</div>
              ) : null}
            <Button
              disabled = { txtUserN.length === 0 || txtPass.length === 0 || loading }
              to="/account"
              fullWidth
              variant="contained"
              className={classes.submit}
              onClick={handleLogin}
            >
              { loading ? (<div className={classes.loadingContainer}><CircularProgress style={{color: '#a34700'}}/><Typography>CARGANDO</Typography></div>) : "INICIAR SESIÓN" }
            </Button>
            <Grid container>
              <Grid item>
                <NavLink variant="body2" as={NavLink} to="/signup">
                  REGÍSTRATE
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Grid>
  );
}