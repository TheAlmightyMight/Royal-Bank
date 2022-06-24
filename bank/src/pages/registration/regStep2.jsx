import React, { useState } from "react";

//MUI components
import {
  TextField,
  Box,
  Grid,
  Button,
  Typography,
  FormControl,
} from "@mui/material";

//MUI ICONS
import Logo from "../../components/logo";

//Router
import { useNavigate } from "react-router-dom";

// /\d{4}/gm
// /\d{6}/gm

function RegStep2() {
  const navigate = useNavigate();
  const [values, setValues] = useState([
    {
      name: "serialNumber",
      value: "",
      error: false,
    },
    {
      name: "theNumber",
      value: "",
      error: false,
    },
    {
      name: "date",
      date: "",
      error: false,
    },
    {
      name: "givenFrom",
      value: "",
      error: false,
    },
  ]);
  const serialNumberHandler = (e) => {
    let reg = /\d{4}/;
    let item = values.find((el) => el.name === "serialNumber");
    if (item.value === "") {
      let arr = values.map((el) => {
        if (el.name === "serialNumber") {
          return {
            ...el,
            error: true,
          };
        }
        return el;
      });
      setValues(arr);
    }
    if (
      reg.test(String(e.target.value).toLowerCase()) &&
      e.target.value.length === 4
    ) {
      let arr = values.map((el) => {
        if (el.name === "serialNumber") {
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
        if (el.name === "serialNumber") {
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
  const numberHandler = (e) => {
    let reg = /\d{6}/;
    let item = values.find((el) => el.name === "theNumber");
    if (item.value === "") {
      let arr = values.map((el) => {
        if (el.name === "theNumber") {
          return {
            ...el,
            error: true,
          };
        }
        return el;
      });
      setValues(arr);
    }
    if (
      reg.test(String(e.target.value).toLowerCase()) &&
      e.target.value.length === 6
    ) {
      let arr = values.map((el) => {
        if (el.name === "theNumber") {
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
        if (el.name === "theNumber") {
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
  const fromHandler = (e) => {
    let reg = /\d/g;
    let item = values.find((el) => el.name === "givenFrom");
    if (item.value === "") {
      let arr = values.map((el) => {
        if (el.name === "givenFrom") {
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
        if (el.name === "givenFrom") {
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
        if (el.name === "givenFrom") {
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
  const nextStep = () => {
    let check = values.some((el) => el.value === "");
    if (check) {
      alert("Ошибка валидации");
    } else {
      navigate("/registration/step3");
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
        <Grid item xs={12}>
          <Typography
            sx={{
              fontWeight: "300",
              fontFamily: "Poppins",
              textAlign: "center",
            }}
            variant="h5"
            component="h3"
          >
            Введите данные для входа
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <FormControl fullWidth sx={{ mr: "1rem", mt: "1.5rem" }}>
            <TextField
              error={values[0].error}
              onChange={(e) => serialNumberHandler(e)}
              type="text"
              label={"серия"}
            ></TextField>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <FormControl fullWidth sx={{ mt: "1.5rem" }}>
            <TextField
              error={values[1].error}
              onChange={(e) => numberHandler(e)}
              type="text"
              label={"номер"}
            ></TextField>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth sx={{ mt: "1.5rem" }}>
            <TextField
              error={values[2].error}
              onChange={(e) => dateHandler(e)}
              helperText="Дата выдачи"
              type="date"
            ></TextField>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <FormControl fullWidth sx={{ mt: "1.5rem" }}>
            <TextField
              error={values[3].error}
              onChange={(e) => fromHandler(e)}
              label={"Выдан"}
              helperText="Кем выдан"
              type="text"
            ></TextField>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "grid",
            width: "100%",
            placeItems: "center",
          }}
        >
          <Button
            onClick={() => nextStep()}
            style={{
              background: "hsla(5, 100%, 50%, 1)",
            }}
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
        </Grid>
      </Grid>
    </Box>
  );
}

export default RegStep2;
