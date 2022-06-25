import React from "react";

//MUI
import {
  TextField,
  Grid,
  InputAdornment,
  IconButton,
  FormControl,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function PasswordCheck({ passwordShown, values, setPasswordShown }) {
  return (
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
  );
}

export default PasswordCheck;
