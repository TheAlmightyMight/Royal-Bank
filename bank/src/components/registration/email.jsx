import React from "react";

//MUI
import { TextField, Grid, FormControl } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

function Email({ emailHandler, values }) {
  return (
    <Grid item xs={12}>
      <FormControl fullWidth sx={{ mt: "1.5rem" }}>
        <TextField
          error={values.email.error}
          onChange={(e) => emailHandler(e)}
          InputProps={{
            endAdornment: <EmailIcon sx={{ mr: "0.6rem" }} />,
          }}
          type="email"
          label={"Электронный адрес"}
        ></TextField>
      </FormControl>
    </Grid>
  );
}

export default Email;
