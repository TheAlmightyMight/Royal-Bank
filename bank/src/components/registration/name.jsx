import React from "react";

//MUI
import { TextField, InputAdornment, FormControl, Grid } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";

function NameField({ name, text, nameCheck, values }) {
  return (
    <Grid item xs={12}>
      <FormControl fullWidth sx={{ mt: "1.5rem", minWidth: "inherit" }}>
        <TextField
          error={values[0].error}
          onChange={(e) => nameCheck(e)}
          helperText={text}
          type="text"
          label={name}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon></PersonIcon>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </FormControl>
    </Grid>
  );
}

export default NameField;
