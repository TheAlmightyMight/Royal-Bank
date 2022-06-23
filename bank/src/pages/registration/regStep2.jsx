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
import PersonIcon from "@mui/icons-material/Person";

//Router
import { useNavigate } from "react-router-dom";

// /\d{4}/gm
// /\d{6}/gm

function RegStep2() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    serialNumber: {
      value: "",
      error: false,
    },
    number: {
      value: "",
      error: false,
    },
    date: {
      date: "",
      error: false,
    },
    givenFrom: {
      value: "",
      error: false,
    },
  });
  const serialNumberHandler = (e) => {
    let reg = /\d{4}/;
    if (values.serialNumber.value === "") {
      setValues({
        ...values,
        serialNumber: {
          ...values.serialNumber,
          error: true,
        },
      });
    }
    if (
      reg.test(String(e.target.value).toLowerCase()) &&
      e.target.value.length === 4
    ) {
      setValues({
        ...values,
        serialNumber: {
          value: e.target.value,
          error: false,
        },
      });
    } else {
      setValues({
        ...values,
        serialNumber: {
          value: e.target.value,
          error: true,
        },
      });
    }
  };
  const numberHandler = (e) => {
    let reg = /\d{6}/;
    if (values.serialNumber.value === "") {
      setValues({
        ...values,
        number: {
          ...values.serialNumber,
          error: true,
        },
      });
    }
    if (
      reg.test(String(e.target.value).toLowerCase()) &&
      e.target.value.length === 6
    ) {
      setValues({
        ...values,
        number: {
          value: e.target.value,
          error: false,
        },
      });
    } else {
      setValues({
        ...values,
        number: {
          value: e.target.value,
          error: true,
        },
      });
    }
  };
  const dateCheck = (e) => {
    if (values.date.date) {
      setValues({
        ...values,
        date: {
          date: e.target.value,
          error: false,
        },
      });
    } else {
      setValues({
        ...values,
        date: {
          // ...values.date,
          date: e.target.value,
          error: true,
        },
      });
    }
  };
  const nameCheck = (e) => {
    const reg =
      /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/;
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
        <Grid item xs={12}>
          <Typography variant="h4" component="h3">
            Введите ваши паспортные данные
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <FormControl fullWidth sx={{ mr: "1rem", mt: "1.5rem" }}>
            <TextField
              error={values.serialNumber.error}
              onChange={(e) => serialNumberHandler(e)}
              type="text"
              label={"серия"}
            ></TextField>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <FormControl fullWidth sx={{ mt: "1.5rem" }}>
            <TextField
              error={values.number.error}
              onChange={(e) => numberHandler(e)}
              type="text"
              label={"номер"}
            ></TextField>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth sx={{ mt: "1.5rem" }}>
            <TextField
              error={values.date.date ? false : true}
              onBlur={(e) => dateCheck(e)}
              helperText="Дата выдачи"
              type="date"
            ></TextField>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <FormControl fullWidth sx={{ mt: "1.5rem" }}>
            <TextField helperText="Кем выдан" type="text"></TextField>
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
            onClick={() => navigate("/registration/step3")}
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
