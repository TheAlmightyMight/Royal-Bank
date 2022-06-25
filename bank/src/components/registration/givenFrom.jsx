import React from "react";

//MUI components
import { TextField, Grid, FormControl } from "@mui/material";

function GivenFrom({ fromHandler, values, label, text }) {
  return (
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
  );
}

export default GivenFrom;
