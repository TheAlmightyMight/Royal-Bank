import React from "react";

//MUI
import {
  TextField,
  Grid,
  InputAdornment,
  IconButton,
  FormControl,
  Alert,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CheckIcon from "@mui/icons-material/Check";

function Password({
  passwordShown,
  setPasswordShown,
  values,
  generatorHandler,
}) {
  return (
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
          onChange={(e) => setValues({ ...values, password: e.target.value })}
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
  );
}

export default Password;
