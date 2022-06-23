import React, { useEffect, useState } from "react";

//MUI components
import {
  TextField,
  Box,
  Button,
  Typography,
  InputAdornment,
  FormControl,
} from "@mui/material";

//MUI icons
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PhoneIcon from "@mui/icons-material/Phone";

//router
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: {
      value: "",
      error: false,
    },
    surname: {
      value: "",
      error: false,
    },
    thirdName: {
      value: "",
      error: false,
    },
    date: {
      value: "",
      error: false,
    },
    phone: {
      value: "",
      error: false,
    },
  });
  const nameCheck = (e) => {
    let reg =
      /^[А-ЯЁ][а-яё]*([-][А-ЯЁ][а-яё]*)?\s[А-ЯЁ][а-яё]*\s[А-ЯЁ][а-яё]*$/g;
    if (values.name.value === "") {
      setValues({
        ...values,
        name: {
          ...values.name,
          error: true,
        },
      });
    }
    if (reg.test(String(e.target.value).toLowerCase())) {
      console.log("yay");
      setValues({
        ...values,
        name: {
          ...values.name,
          error: true,
        },
      });
    } else {
      setValues({
        ...values,
        name: {
          value: e.target.value,
          error: false,
        },
      });
    }
  };
  return (
    <Box sx={{ display: "grid", placeItems: "center", mt: "0" }}>
      <Box
        autoComplete="on"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: "450px",
          padding: "2rem",
        }}
        component="form"
        noValidate
      >
        <Typography variant="h4" component="h3">
          Введите ваши данные
        </Typography>
        <FormControl sx={{ mt: "1.5rem", minWidth: "inherit" }}>
          <TextField
            error={values.name.error}
            onChange={(e) => nameCheck(e)}
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
          />
        </FormControl>
        <FormControl sx={{ mt: "1.5rem", minWidth: "inherit" }}>
          <TextField
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
          />
        </FormControl>
        <FormControl sx={{ mt: "1.5rem", minWidth: "inherit" }}>
          <TextField
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
          />
        </FormControl>
        <FormControl sx={{ mt: "1.5rem", minWidth: "inherit" }}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarMonthIcon></CalendarMonthIcon>
                </InputAdornment>
              ),
            }}
            helperText="Введите вашу дату рождения"
            type="date"
          />
        </FormControl>
        <FormControl sx={{ mt: "1.5rem", minWidth: "inherit" }}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneAndroidIcon></PhoneAndroidIcon>
                </InputAdornment>
              ),
            }}
            helperText="Введите ваш телефон в указанном формате: +79923546783"
            defaultValue="+7"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          />
        </FormControl>
        <Button
          onClick={() => navigate("/registration/step2")}
          sx={{
            width: "225px",
            height: "50px",
            color: "black",
            border: "1px solid black",
            mt: "3rem",
          }}
          variant="contained"
          color="error"
        >
          Следующий шаг
        </Button>
      </Box>
    </Box>
  );
}

export default Registration;
