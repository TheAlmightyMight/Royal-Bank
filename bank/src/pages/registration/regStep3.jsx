import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//MUI components
import {
  TextField,
  Box,
  Grid,
  InputAdornment,
  IconButton,
  FormControl,
  Alert,
} from "@mui/material";

//helpers
import Generate from "../../helpers/generator";

//components
import Logo from "../../components/logo";
import Email from "../../components/registration/email";
import Instruction from "../../components/registration/instruction";
import Login from "../../components/registration/login";
import ProceedBtn from "../../components/registration/proceedBtn";
import Password from "../../components/registration/password";

//media
import PasswordCheck from "../../components/registration/passwordCheck";

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
        <Instruction />
        <Login loginHandler={loginHandler} values={values} />
        <Email emailHandler={emailHandler} values={values} />
        <Password
          values={values}
          generatorHandler={generatorHandler}
          passwordShown={passwordShown}
          setPasswordShown={setPasswordShown}
        />
        <PasswordCheck
          passwordShown={passwordShown}
          values={values}
          setPasswordShown={setPasswordShown}
        />
        <ProceedBtn />
      </Grid>
    </Box>
  );
}

export default RegStep3;
