import React from 'react';
// Rerdux
import { useDispatch } from 'react-redux';
import { resetUserSearch } from '../Actions/user';
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
    backgroundColor: '#ffffffc7'
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
  }
}));

export default function SignIn() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const handleLogin = () => dispatch(resetUserSearch());

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
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Nombre de Usuario"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="#D6770F" />}
            label="Recordarme"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="#D6770F"
            className={classes.submit}
          >
            INICIAR SESIÓN
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                ¿Olvidaste la contraseña?
              </Link>
            </Grid>
            <Grid item>
                <NavLink variant="body2" as={NavLink} to="/signup">REGÍSTRATE</NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </Grid>
  );
}