import React, { useState, useEffect }  from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { resetUser } from '../Actions/user'
//components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
//  Styles
import {
  withStyles,
  makeStyles
} from '@material-ui/core/styles';

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
    backgroundColor: '#ffffff91',
    color: 'black',
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
    alignItems: 'center'
  },
  passwordsContainer: {
    padding: 0
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

export default function CardAccount(props) {
  const classes = useStyles();

  // User from store
  const user = useSelector((state) => _.get(state, "user.results"));

  // Data state
  const [txtName, setTxtName] = useState(user?.completeName);
  const [txtLName, setTxtLName] = useState('');
  const [txtUserName, setTxtUserName] = useState(user?.username);
  const [txtEMail, setTxtEmail] = useState(user?.email);
  const [txtPassword, setTxtPassword] = useState('');
  const [txtNewPassword, setTxtNewPassword] = useState('');
  const [txtRepeatPass, setTxtRepeatPass] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [passwordValid, setPassValid] = useState(true);

  const restoreData = () => {
    setTxtName(user?.completeName);
    setTxtLName('');
    setTxtEmail(user?.email);
    setTxtPassword('');
    setTxtRepeatPass('');
  }
 
 const dispatch = useDispatch();

 useEffect(() => {
  //  setIsValid(
  //    txtName.length > 0 && 
  //    txtLName.length > 0 &&
  //    txtUserName.length > 0 &&
  //    txtEMail.length > 0 &&
  //    txtPassword.length > 0 &&
  //    txtRepeatPass.length > 0 &&
  //    passwordValid);
 });


  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h4'>
                Bienvenido: {txtUserName}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CssTextField
                disabled={!editMode}              
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
              <CssTextField
                disabled={!editMode}
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
              <CssTextField
                disabled={!editMode}
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
            {!editMode ? null : (
            <React.Fragment>
              <Grid item xs={12}>
                <CssTextField
                  value={txtPassword}
                  name="password"
                  variant="outlined"
                  required
                  fullWidth
                  type="password"
                  label="Contraseña"
                  onChange={e => {
                    setTxtPassword(e.target.value);
                    setPassValid(e.target.value === txtRepeatPass)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  value={txtPassword}
                  name="password"
                  variant="outlined"
                  required
                  fullWidth
                  type="password"
                  label="Nueva Contraseña"
                  onChange={e => {
                    setTxtNewPassword(e.target.value);
                    setPassValid(e.target.value === txtRepeatPass)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  value={txtRepeatPass}
                  variant="outlined"
                  name="password"
                  required
                  fullWidth
                  type="password"
                  label="Repite tu contraseña"
                  onChange={e => {
                    setTxtRepeatPass(e.target.value);
                    setPassValid(e.target.value === txtNewPassword)
                  }}
                />
              </Grid>
            </React.Fragment>
            )}
            <div className={classes.buttonGroup}>
              <ButtonGroup aria-label="outlined secondary button group">
                {editMode ? [
                    (<Button onClick={() => {setEditMode(false)}} variant="contained" className={classes.button}>CANCELAR</Button>),
                    (<Button variant="contained" className={classes.button}>Eliminar Cuenta</Button>)
                 ] : (
                  <Button onClick={() => {setEditMode(true)}} variant="contained" className={classes.button}>EDITAR CUENTA</Button>
                )}
                <Button variant="contained" className={classes.button} onClick={() => {dispatch(resetUser())} }>Cerrar Sesión</Button>
              </ButtonGroup>
            </div>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}