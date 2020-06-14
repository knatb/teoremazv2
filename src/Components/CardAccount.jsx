import React, { useState, useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { resetUser, editUserReq } from "../Actions/user";
//components
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
//  Styles
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

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
  const isLoading = useSelector((state) => _.get(state, "editUser.loading"))
  // Data state
  const [txtUserName, setTxtUserName] = useState(user?.username);
  const [txtName, setTxtName] = useState(user?.completeName);
  const [txtLName, setTxtLName] = useState("");
  const [txtEMail, setTxtEmail] = useState(user?.email);
  const [txtPassword, setTxtPassword] = useState("");
  const [txtNewPassword, setTxtNewPassword] = useState("");
  const [txtRepeatPass, setTxtRepeatPass] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [passwordValid, setPassValid] = useState(true);

  const restoreData = () => {
    setTxtName(user?.completeName);
    setTxtLName("");
    setTxtEmail(user?.email);
    setTxtPassword("");
    setTxtNewPassword("");
    setTxtRepeatPass("");
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (editMode) {
      setIsValid(
        txtName.length > 0 &&
          txtLName.length > 0 &&
          txtEMail.length > 0 &&
          txtPassword.length > 0 &&
          txtRepeatPass.length > 0 &&
          passwordValid
      );
    }
  });

  const updateHandler = () => {
    // Will be hashed
    let hashedFormPass = txtPassword;
    
    if(hashedFormPass === user.password) {
      let newUser = {
        username: user.username,
        email: txtEMail,
        completeName: txtName + '<=>' + txtLName,
        password: txtNewPassword
      }
      dispatch(editUserReq(newUser))
    }
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4">Bienvenido: {txtUserName}</Typography>
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
                  >
                    Las contraseñas no coinciden
                  </Typography>
                </Grid>
                <Grid className={classes.updateButtonContainer} item xs={12}>
                  <Button
                    disabled={!isValid}
                    variant="contained"
                    className={`${classes.button} ${classes.updateButton}`}
                    onClick={ updateHandler }
                  >
                    Actualizar Usuario
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
                    >
                      CANCELAR
                    </Button>,
                    <Button
                      key={2}
                      variant="contained"
                      className={classes.button}
                    >
                      Eliminar Cuenta
                    </Button>,
                  ]
                ) : (
                  <Button
                    onClick={() => {
                      setEditMode(true);
                    }}
                    variant="contained"
                    className={classes.button}
                  >
                    EDITAR CUENTA
                  </Button>
                )}
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={() => {
                    dispatch(resetUser());
                  }}
                >
                  Cerrar Sesión
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}
