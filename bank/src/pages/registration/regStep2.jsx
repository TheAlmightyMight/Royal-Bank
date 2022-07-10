import React, { useState } from "react";

//MUI components
import { Box, Grid } from "@mui/material";

//components
import Instruction from "../../components/registration/instruction";
import Logo from "../../components/logo/logo";
import ProceedBtn from "../../components/registration/proceedBtn";
import GivenFrom from "../../components/registration/givenFrom";
import DateField from "../../components/registration/date";
import SerialNumber from "../../components/registration/serialNumber";

//Router
import { useNavigate } from "react-router-dom";

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
    let check = values.some((el) => el.value === "" || el.date === "");
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
        <Instruction />
        <SerialNumber
          columns={4}
          text={"серия"}
          values={values}
          index={0}
          numberHandler={serialNumberHandler}
        />
        <SerialNumber
          columns={8}
          text={"номер"}
          values={values}
          index={1}
          numberHandler={numberHandler}
        />
        <DateField
          dateHandler={dateHandler}
          values={values}
          columns={4}
          index={2}
        />
        <GivenFrom values={values} fromHandler={fromHandler} />
        <ProceedBtn nextStep={nextStep} />
      </Grid>
    </Box>
  );
}

export default RegStep2;
