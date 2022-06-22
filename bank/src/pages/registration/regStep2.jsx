import React from "react";

//MUI components
import {
  TextField,
  Box,
  Grid,
  Button,
  Typography,
  FormControl,
} from "@mui/material";

//MUI ICONS
import PersonIcon from "@mui/icons-material/Person";

//Router
import { useNavigate } from "react-router-dom";

function RegStep2() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        autoComplete="on"
        spacing={1}
        container
        sx={{ p: "1rem", maxWidth: "600px" }}
        component="form"
        noValidate
      >
        <Grid item xs={12}>
          <Typography variant="h4" component="h3">
            Введите ваши паспортные данные
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <FormControl fullWidth sx={{ mr: "1rem", mt: "1.5rem" }}>
            <TextField type="text" label={"серия"}></TextField>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <FormControl fullWidth sx={{ mt: "1.5rem" }}>
            <TextField type="text" label={"номер"}></TextField>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth sx={{ mt: "1.5rem" }}>
            <TextField helperText="Дата выдачи" type="date"></TextField>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <FormControl fullWidth sx={{ mt: "1.5rem" }}>
            <TextField helperText="Кем выдан" type="text"></TextField>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "grid",
            width: "100%",
            placeItems: "center",
          }}
        >
          <Button
            onClick={() => navigate("/registration/step3")}
            sx={{
              width: "225px",
              height: "50px",
              color: "black",
              border: "1px solid black",
              mt: "3rem",
            }}
            variant="contained"
            color="error"
          >
            Следующий шаг
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default RegStep2;
