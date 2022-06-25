import React from "react";

//MUI
import { TextField, InputAdornment, FormControl, Grid } from "@mui/material";

import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

function PhoneField({ values, phoneHandler }) {
  return (
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
  );
}

export default PhoneField;
