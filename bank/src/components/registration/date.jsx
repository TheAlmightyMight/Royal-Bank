import React from "react";

//MUI
import { TextField, InputAdornment, FormControl, Grid } from "@mui/material";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function DateField({ values, dateHandler, text, columns, index }) {
  return (
    <Grid item xs={columns}>
      <FormControl fullWidth sx={{ mt: "1.5rem", minWidth: "inherit" }}>
        <TextField
          error={values[index].error}
          onChange={(e) => dateHandler(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CalendarMonthIcon></CalendarMonthIcon>
              </InputAdornment>
            ),
          }}
          helperText={text}
          type="date"
        ></TextField>
      </FormControl>
    </Grid>
  );
}

export default DateField;
