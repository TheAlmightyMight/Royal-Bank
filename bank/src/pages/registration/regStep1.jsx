import React, { useEffect, useState } from "react";

//MUI components
import {
  TextField,
  Box,
  Button,
  Typography,
  InputAdornment,
  FormControl,
  Grid,
} from "@mui/material";

//MUI icons
import Logo from "../../components/logo";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

//router
import { useNavigate } from "react-router-dom";

//@^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$@gm

function Registration() {
  const navigate = useNavigate();
  const [values, setValues] = useState([
    {
      name: "surname",
      value: "",
      error: false,
    },
    {
      name: "name",
      value: "",
      error: false,
    },
    {
      name: "3rdname",
      value: "",
      error: false,
    },
    {
      name: "date",
      date: "",
      error: false,
    },
    {
      name: "phone",
      value: "",
      error: false,
    },
  ]);
  const nameCheck = (e) => {
    let reg = /\d/g;
    let item = values.find((el) => el.name === "name");
    console.log(e.target.value);
    if (item.value === "") {
      let arr = values.map((el) => {
        if (el.name === "name") {
          return {
            ...el,
            error: true,
          };
        }
        return el;
      });
      setValues(arr);
    }
    if (reg.test(String(e.target.value).toLowerCase())) {
      let arr = values.map((el) => {
        if (el.name === "name") {
          return {
            ...el,
            value: e.target.value,
            error: true,
          };
        }
        return el;
      });
      setValues(arr);
    } else {
      let arr = values.map((el) => {
        if (el.name === "name") {
          return {
            ...el,
            value: e.target.value,
            error: false,
          };
        }
        return el;
      });
      setValues(arr);
    }
  };
  const surnameCheck = (e) => {
    let reg = /\d\*/;
    let item = values.find((el) => el.name === "surname");
    console.log(e.target.value);
    if (item.value === "") {
      let arr = values.map((el) => {
        if (el.name === "surname") {
          return {
            ...el,
            error: true,
          };
        }
        return el;
      });
      setValues(arr);
    }
    if (reg.test(String(e.target.value).toLowerCase())) {
      let arr = values.map((el) => {
        if (el.name === "surname") {
          return {
            ...el,
            value: e.target.value,
            error: true,
          };
        }
        return el;
      });
      setValues(arr);
    } else {
      let arr = values.map((el) => {
        if (el.name === "surname") {
          return {
            ...el,
            value: e.target.value,
            error: false,
          };
        }
        return el;
      });
      setValues(arr);
    }
  };
  const nameCheck2 = (e) => {
    let reg = /\d\*/;
    let item = values.find((el) => el.name === "3rdname");
    if (item.value === "") {
      let arr = values.map((el) => {
        if (el.name === "3rdname") {
          return {
            ...el,
            error: true,
          };
        }
        return el;
      });
      setValues(arr);
    }
    if (reg.test(String(e.target.value).toLowerCase())) {
      let arr = values.map((el) => {
        if (el.name === "3rdname") {
          return {
            ...el,
            value: e.target.value,
            error: true,
          };
        }
        return el;
      });
      setValues(arr);
    } else {
      let arr = values.map((el) => {
        if (el.name === "3rdname") {
          return {
            ...el,
            value: e.target.value,
            error: false,
          };
        }
        return el;
      });
      setValues(arr);
    }
  };
  const dateHandler = (e) => {
    console.log(e.target.value);
    let arr = values.map((el) => {
      if (el.name === "date") {
        return {
          ...el,
          date: e.target.value,
          error: false,
        };
      }
      return el;
    });
    setValues(arr);
  };
  const phoneHandler = (e) => {
    let reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
    let item = values.find((el) => el.name === "phone");

    if (item.value === "") {
      let arr = values.map((el) => {
        if (el.name === "phone") {
          return {
            ...el,
            error: true,
          };
        }
        return el;
      });
      setValues(arr);
    }

    if (reg.test(String(e.target.value).toLowerCase())) {
      let arr = values.map((el) => {
        if (el.name === "phone") {
          return {
            ...el,
            value: e.target.value,
            error: false,
          };
        }
        return el;
      });
      setValues(arr);
    } else {
      let arr = values.map((el) => {
        if (el.name === "phone") {
          return {
            ...el,
            value: e.target.value,
            error: true,
          };
        }
        return el;
      });
      setValues(arr);
    }
  };
  const nextStep = () => {
    let check = values.some((el) => el.value === "");
    if (check) {
      alert("Ошибка валидации");
    } else {
      navigate("/registration/step2");
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
      }}
    >
      <Grid
        container
        autoComplete="on"
        sx={{
          maxWidth: "600px",
          padding: "2rem",
        }}
        component="form"
        noValidate
      >
        <Grid item style={{ marginTop: "3rem" }} xs={12}>
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
          <FormControl fullWidth sx={{ mt: "1.5rem", minWidth: "inherit" }}>
            <TextField
              error={values[0].error}
              onChange={(e) => surnameCheck(e)}
              helperText="Введите вашу фамилию"
              type="text"
              label={"Фамилия"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon></PersonIcon>
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth sx={{ mt: "1.5rem", minWidth: "inherit" }}>
            <TextField
              error={values[1].error}
              onChange={(e) => nameCheck(e)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon></PersonIcon>
                  </InputAdornment>
                ),
              }}
              helperText="Введите ваше имя"
              type="text"
              label={"Имя"}
            ></TextField>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth sx={{ mt: "1.5rem", minWidth: "inherit" }}>
            <TextField
              error={values[2].error}
              onChange={(e) => nameCheck2(e)}
              helperText="Введите ваше отчество"
              type="text"
              label={"Отчество"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon></PersonIcon>
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth sx={{ mt: "1.5rem", minWidth: "inherit" }}>
            <TextField
              error={values[3].error}
              onChange={(e) => dateHandler(e)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarMonthIcon></CalendarMonthIcon>
                  </InputAdornment>
                ),
              }}
              helperText="Введите вашу дату рождения"
              type="date"
            ></TextField>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth sx={{ mt: "1.5rem", minWidth: "inherit" }}>
            <TextField
              error={values[4].error}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneAndroidIcon></PhoneAndroidIcon>
                  </InputAdornment>
                ),
              }}
              helperText="Введите ваш телефон в указанном формате: +79923546783"
              defaultValue="+7"
              onChange={(e) => phoneHandler(e)}
            ></TextField>
          </FormControl>
        </Grid>
        <Grid sx={{ display: "grid", placeItems: "center" }} item xs={12}>
          <Button
            style={{
              background: "hsla(5, 100%, 50%, 1)",
            }}
            onClick={() => nextStep()}
            sx={{
              width: "225px",
              height: "50px",
              color: "black",
              border: "1px solid black",
              mt: "3rem",
            }}
            variant="contained"
          >
            Следующий шаг
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Registration;
