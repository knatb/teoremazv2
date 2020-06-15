import React, { useState, useEffect } from "react";
import { NavLink} from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { resetUser, editUserReq, editUserReset, deleteUser } from "../Actions/user";
//components
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
//  Styles
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Snackbar, Modal, Fade } from "@material-ui/core";
import { sha512 } from "js-sha512";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    position: "center",
    padding: theme.spacing(2),
    margin: "auto",
    alignItems: "center",
    maxWidth: "100%",
    backgroundColor: "#ffffff91",
    color: "black",
    borderRadius: "30px",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "50%",
    maxHeight: "50%",
  },
  titles: {
    fontWeight: "bold",
    fontSize: "1.2em",
  },
  button: {
    margin: theme.spacing(2),
    background: "#D6770F",
    color: "white",
    width: 160,
    height: 50,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
  },
  account: {
    flexDirection: "column",
    alignItems: "center",
  },
  passwordsContainer: {
    padding: 0,
  },
  updateButtonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  updateButton: {
    width: "100%",
  },

  modalBackground: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#000000EE'
  },
  modal: {
    padding: '10px',
    background: '#ffffff91',
    color: 'white'
  },
  modalButtonDelete: {
    color: 'red',
    border: 'solid red',
    margin: 3,
    '&:hover': {
      background: 'red',
      color: 'white'
    }
  },
  modalButtonCancel: {
    border: 'solid black',
    background: 'white',
    margin: 3
  },
  modalPassword: {
    color: 'white',
    margin: 3
  }
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#b82204",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#D6770F",
      },
      "&:hover fieldset": {
        borderColor: "#b82204",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#D6770F",
      },
    },
  },
})(TextField);

export default function CardAccount(props) {
  const classes = useStyles();

  // User from store
  const user = useSelector((state) => _.get(state, "user.results"));
  const isLoading = useSelector((state) => _.get(state, "editUser.loading"));
  const userCreated = useSelector((state) => _.get(state, "editUser.results"));
  // Data state
  const [txtUserName] = useState(user?.username);
  const completeName = user?.completeName.split("<=>");
  const [txtName, setTxtName] = useState(completeName === undefined ? '' : completeName[0]);
  const [txtLName, setTxtLName] = useState(completeName === undefined ? '' : completeName[1]);
  const [txtEMail, setTxtEmail] = useState(user?.email);
  const [txtPassword, setTxtPassword] = useState("");
  const [txtNewPassword, setTxtNewPassword] = useState("");
  const [txtRepeatPass, setTxtRepeatPass] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [passwordValid, setPassValid] = useState(true);

  const [showIncorrectPass, setShowIncorrectPass] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [passModal, setPassModal] = useState('');

  const restoreData = () => {
    setTxtName(completeName[0]);
    setTxtLName(completeName[1]);
    setTxtEmail(user?.email);
    setTxtPassword("");
    setTxtNewPassword("");
    setTxtRepeatPass("");
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (editMode) {
      setIsValid(
        txtName?.length > 0 &&
          txtLName?.length > 0 &&
          txtEMail?.length > 0 &&
          txtPassword?.length > 0 &&
          txtRepeatPass?.length > 0 &&
          passwordValid
      );
    }
  });

  const updateHandler = () => {
    // Will be hashed
    let hashedFormPass = sha512(txtPassword);
    setShowIncorrectPass(false);
    if(hashedFormPass === user.password) {
      let hashednewPass = sha512(txtNewPassword);
      let newUser = {
        username: user.username,
        email: txtEMail,
        completeName: txtName + '<=>' + txtLName,
        password: hashednewPass
      }
      dispatch(editUserReq(newUser))
    } else {
      setShowIncorrectPass(true);
    }
  }

  const deleteHandler = () => {
    let hashedPass = sha512(passModal);
    if(hashedPass === user.password)
      dispatch(deleteUser(user));
    else{
      alert("Contraseña incorrecta");
    }
  }

  if(!isLoading && userCreated) {
    setEditMode(false);
    dispatch(editUserReset());
    restoreData();
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4">¡Bienvenido {txtUserName} !</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CssTextField
                disabled={!editMode}
                value={txtName}
                name="firstName"
                autoComplete="fname"
                variant="outlined"
                required={editMode}
                fullWidth
                id="firstName"
                label="Nombre(s)"
                autoFocus
                onChange={(e) => {
                  setTxtName(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CssTextField
                disabled={!editMode}
                value={txtLName}
                name="lastName"
                autoComplete="lname"
                variant="outlined"
                required={editMode}
                fullWidth
                id="lastName"
                label="Apellidos"
                onChange={(e) => {
                  setTxtLName(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                disabled={!editMode}
                value={txtEMail}
                name="email"
                autoComplete="email"
                variant="outlined"
                required={editMode}
                fullWidth
                id="email"
                label="Correo Electrónico"
                onChange={(e) => {
                  setTxtEmail(e.target.value);
                }}
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
                    onChange={(e) => {
                      setTxtPassword(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CssTextField
                    value={txtNewPassword}
                    name="password"
                    variant="outlined"
                    required
                    fullWidth
                    type="password"
                    label="Nueva Contraseña"
                    onChange={(e) => {
                      setTxtNewPassword(e.target.value);
                      setPassValid(e.target.value === txtRepeatPass);
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
                    onChange={(e) => {
                      setTxtRepeatPass(e.target.value);
                      setPassValid(e.target.value === txtNewPassword);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    style={{ opacity: Number(!passwordValid), color: '#b82204' }}
                    variant="body2"
                  > Las contraseñas no coinciden
                  </Typography>
                </Grid>
                <Grid className={classes.updateButtonContainer} item xs={12}>
                  <Button
                    disabled={!isValid}
                    variant="contained"
                    className={`${classes.button} ${classes.updateButton}`}
                    onClick={ updateHandler }
                  > Actualizar Usuario
                    {isLoading ? <CircularProgress/> : null}
                  </Button>
                </Grid>
              </React.Fragment>
            )}
            <Grid item xs={12} className={classes.buttonGroup}>
              <ButtonGroup aria-label="outlined secondary button group">
                {editMode ? (
                  [
                    <Button
                      key={1}
                      onClick={() => {
                        setEditMode(false);
                        restoreData();
                      }}
                      variant="contained"
                      className={classes.button}
                    > CANCELAR
                    </Button>,
                    <Button
                      key={2}
                      variant="contained"
                      className={classes.button}
                      onClick={() => {setShowModal(true)}}
                    > Eliminar Cuenta
                    </Button>,
                  ]
                ) : (
                  <Button
                    onClick={() => {
                      setEditMode(true);
                    }}
                    variant="contained"
                    className={classes.button}
                  > EDITAR CUENTA
                  </Button>
                )}
                  <Button
                    variant="contained"
                    component={NavLink}
                    to='/signin'
                    className={classes.button}
                    onClick={() => {
                      dispatch(resetUser());
                    }}
                  > Cerrar Sesión
                  </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Snackbar
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        open={showIncorrectPass}
        message="Contraseña incorrecta"
      />
      <Modal
        open={showModal}
        className={classes.modalBackground}>
          <Fade in={showModal}>
            <Paper className={classes.modal}>
              <Typography>
                ¿Deseas borrar tu usuario?, 
                NO PODRÁS DESHACER ESTA ACCIÓN
              </Typography>
              <TextField
                varitant='outlined' 
                required
                fullWidth
                value={passModal}
                className={classes.modalPassword} 
                type='password' 
                placeholder='Esribe tu contraseña'
                onChange={e => {
                  setPassModal(e.target.value);
                }}/>
              <div>
                <Button className={classes.modalButtonDelete} onClick={deleteHandler}>SI, SÉ LO QUE HAGO</Button>
                <Button className={classes.modalButtonCancel} onClick={() => {setShowModal(false)}}>NO, ME EQUIVOQUÉ</Button>
              </div>
            </Paper>
          </Fade>
      </Modal>
    </div>
  );
}
