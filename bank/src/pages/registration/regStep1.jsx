import React, { useEffect, useState } from "react";

//MUI components
import { Box, Grid } from "@mui/material";

import Instruction from "../../components/registration/instruction";
import NameField from "../../components/registration/name";
import DateField from "../../components/registration/date";
import PhoneField from "../../components/registration/phone";
import ProceedBtn from "../../components/registration/proceedBtn";

//MUI icons
import Logo from "../../components/logo/logo";

//router
import { useNavigate } from "react-router-dom";

//@^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$@gm

function RegistrationStep1() {
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
        minHeight: "100vh",
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
          <div style={{ height: "60px" }}></div>
        </Grid>
        <Instruction />
        <NameField
          name={"Фамилия"}
          text={"Введите вашу фамилию"}
          nameCheck={surnameCheck}
          values={values}
        />
        <NameField
          name={"Имя"}
          text={"Введите ваше имя"}
          nameCheck={nameCheck}
          values={values}
        />
        <NameField
          name={"Отчество"}
          text={"Введите вашу отчество"}
          nameCheck={nameCheck2}
          values={values}
        />
        <DateField
          text={"Введите вашу дату рождения"}
          dateHandler={dateHandler}
          values={values}
          columns={12}
          index={3}
        />
        <PhoneField values={values} phoneHandler={phoneHandler} />
        <ProceedBtn nextStep={nextStep} />
      </Grid>
    </Box>
  );
}

export default RegistrationStep1;
