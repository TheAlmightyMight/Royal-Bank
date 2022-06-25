import React from "react";

//MUI
import { Typography, Grid } from "@mui/material";

function Instruction() {
  return (
    <Grid item xs={12} sx={{ textAlign: "center" }}>
      <Typography
        sx={{ fontWeight: "300", fontFamily: "Poppins" }}
        variant="h5"
        component="h3"
      >
        Введите данные для входа
      </Typography>
    </Grid>
  );
}

export default Instruction;
