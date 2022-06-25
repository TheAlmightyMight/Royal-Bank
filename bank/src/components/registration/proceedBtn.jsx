import React from "react";

//MUI
import { Button, Grid } from "@mui/material";

function ProceedBtn({ nextStep }) {
  return (
    <Grid sx={{ display: "grid", placeItems: "center" }} item xs={12}>
      <Button
        style={{
          background: "hsla(5, 100%, 50%, 1)",
        }}
        onClick={() => nextStep()}
        sx={{
          width: "225px",
          height: "50px",
          color: "black",
          border: "1px solid black",
          mt: "3rem",
        }}
        variant="contained"
      >
        Следующий шаг
      </Button>
    </Grid>
  );
}

export default ProceedBtn;
