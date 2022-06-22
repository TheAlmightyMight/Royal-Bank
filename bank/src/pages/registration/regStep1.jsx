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
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

//router
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    // showPassword: false,
  });
  // const showPassword = () => {
  //   setValues({
  //     ...values,
  //     showPassword: !values.showPassword,
  //   });
  // };
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
