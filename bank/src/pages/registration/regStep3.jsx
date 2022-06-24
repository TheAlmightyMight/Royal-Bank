import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//MUI components
import {
  TextField,
  Box,
  Grid,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  FormControl,
  Alert,
} from "@mui/material";

//helpers
import Generate from "../../helpers/generator";

//media
import Logo from "../../components/logo";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import CheckIcon from "@mui/icons-material/Check";
import PersonIcon from "@mui/icons-material/Person";

function RegStep3() {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState({
    password: false,
    checkPassword: false,
    passwordHint: false,
  });
  const [values, setValues] = useState({
    email: {
      value: "",
      error: false,
    },
    login: {
      value: "",
      error: false,
    },
    password: "",
    checkPassword: " ",
  });
  const generatorHandler = () => {
    let pass = Generate(20);
    console.log("lol");
    setValues({ ...values, password: pass });
    setPasswordShown({
      ...passwordShown,
      passwordHint: !passwordShown.passwordHint,
    });
  };
  const loginHandler = (e) => {
    let reg = /^[a-z]+([-_]?[a-z0-9]+){0,2}$/i;
    if (values.login.value === "") {
      setValues({
        ...values,
        login: {
          ...values.login,
          error: true,
        },
      });
    }
    if (reg.test(String(e.target.value).toLowerCase())) {
      setValues({
        ...values,
        login: {
          ...values.email,
          error: false,
        },
      });
    } else {
      setValues({
        ...values,
        login: {
          value: e.target.value,
          error: true,
        },
      });
    }
  };
  const emailHandler = (e) => {
    let reg =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (values.email.value === "") {
      setValues({
        ...values,
        email: {
          ...values.email,
          error: true,
        },
      });
    }
    if (reg.test(String(e.target.value).toLowerCase())) {
      setValues({
        ...values,
        email: {
          value: e.target.value,
          error: false,
        },
      });
    } else {
      setValues({
        ...values,

        email: {
          value: e.target.value,
          error: true,
        },
      });
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowY: "none",
      }}
    >
      <Grid
        autoComplete="on"
        spacing={1}
        container
        sx={{ p: "1rem", maxWidth: "600px" }}
        component="form"
        noValidate
      >
        <Grid item sx={{ mb: "1rem" }} xs={12}>
          <Logo />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontWeight: "300", fontFamily: "Poppins" }}
            variant="h5"
            component="h3"
          >
            Введите данные для входа
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth sx={{ mt: "1.5rem" }}>
            <TextField
              error={values.login.error}
              onChange={(e) => loginHandler(e)}
              InputProps={{
                endAdornment: <PersonIcon sx={{ mr: "0.6rem" }} />,
              }}
              type="text"
              label={"Логин"}
            ></TextField>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth sx={{ mt: "1.5rem" }}>
            <TextField
              error={values.email.error}
              onChange={(e) => emailHandler(e)}
              InputProps={{
                endAdornment: <EmailIcon sx={{ mr: "0.6rem" }} />,
              }}
              type="email"
              label={"Электронный адрес"}
            ></TextField>
          </FormControl>
        </Grid>
        <Grid sx={{ position: "relative" }} item xs={12}>
          {passwordShown.passwordHint && (
            <Alert
              role="alert"
              severity="warning"
              variant="filled"
              component="div"
              action={
                <IconButton
                  onClick={() => generatorHandler()}
                  sx={{ mb: "0.5rem" }}
                >
                  <CheckIcon />
                </IconButton>
              }
              sx={{
                mb: "2rem",
                position: "absolute",
                zIndex: "10",
                inset: "0 0 50px 100px ",
              }}
            >
              Сгенерировать пароль?
            </Alert>
          )}
          <FormControl fullWidth sx={{ mt: "1.5rem" }}>
            <TextField
              autoComplete="false"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              onFocus={() =>
                setPasswordShown({
                  ...passwordShown,
                  passwordHint: !passwordShown.passwordHint,
                })
              }
              type={passwordShown.password ? "password" : "text"}
              label={"Пароль"}
              value={values.password}
              helperText="Пароль может содержать только буквы латиницы, цифры и следующие специальные знаки: !@#$%^&* "
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setPasswordShown({
                          ...passwordShown,
                          password: !passwordShown.password,
                        })
                      }
                    >
                      {passwordShown.password ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth sx={{ mt: "1rem" }}>
            <TextField
              onChange={(e) =>
                setValues({ ...values, checkPassword: e.target.value })
              }
              autoComplete="false"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setPasswordShown({
                          ...passwordShown,
                          checkPassword: !passwordShown.checkPassword,
                        })
                      }
                    >
                      {passwordShown.checkPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              type={passwordShown.checkPassword ? "password" : "text"}
              helperText="Повторите пароль"
              label={"Пароль"}
            ></TextField>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <Button
            onClick={() => navigate("/")}
            sx={{
              width: "225px",
              height: "50px",
              color: "black",
              border: "1px solid black",
              mt: "1rem",
            }}
            variant="contained"
            color="error"
          >
            <Typography>Зарегистрироваться</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default RegStep3;
