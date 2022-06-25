import React from "react";

//MUI
import { TextField, Grid, FormControl } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

function Login({ loginHandler, values }) {
  return (
    <Grid item xs={12}>
      <FormControl fullWidth sx={{ mt: "1.5rem" }}>
        <TextField
          error={values.login.error}
          onChange={(e) => loginHandler(e)}
          InputProps={{
            endAdornment: <PersonIcon sx={{ mr: "0.6rem" }} />,
          }}
          type="text"
          label={"Логин"}
        ></TextField>
      </FormControl>
    </Grid>
  );
}

export default Login;
