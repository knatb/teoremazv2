import React, { useState, useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { searchUser } from '../Actions/user';
import _ from 'lodash';
// Page routing Redirection
import { useHistory } from 'react-router-dom';
// Components
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress'
//  Styles
import {
  withStyles,
  makeStyles
} from '@material-ui/core/styles';
import { sha512 } from 'js-sha512';

//https://material-ui.com/components/text-fields/#customized-inputs
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
    backgroundColor: '#ffffff91',
    margin: '20px 0px 20px 0px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#D6770F'
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
  },
  optionLink: {
    color: '#541a75',
    fontWeight:'bold'
  }
}));

const CssTextField = withStyles({
  root: {    
    '& label.Mui-focused': {
      color: '#b82204',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#D6770F',
      },
      '&:hover fieldset': {
        borderColor: '#b82204',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#D6770F',
      },
    },
  },
})(TextField);

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

  const handleLogin = () => {
    let hashedPass = sha512(txtPass)
    dispatch(searchUser({
      username: txtUserN,
      password: hashedPass
    }))
  };

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
            <CssTextField
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
            <CssTextField
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
                <NavLink className={classes.optionLink} variant="body2" as={NavLink} to="/signup">
                  ¿NO TIENES CUENTA?, REGÍSTRATE
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Grid>
  );
}