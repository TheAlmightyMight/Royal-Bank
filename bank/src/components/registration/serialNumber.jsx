import React from "react";

//MUI
import { TextField, FormControl, Grid } from "@mui/material";

function SerialNumber({ text, numberHandler, values, columns, index }) {
  return (
    <Grid item xs={columns}>
      <FormControl fullWidth sx={{ mt: "1.5rem" }}>
        <TextField
          error={values[index].error}
          onChange={(e) => numberHandler(e)}
          type="text"
          label={text}
        ></TextField>
      </FormControl>
    </Grid>
  );
}

export default SerialNumber;
