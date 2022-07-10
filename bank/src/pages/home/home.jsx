import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Grid, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import { motion } from "framer-motion";

import styles from "./home.module.css";

import Logo from "../../components/logo/logo";

//Icons
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SavingsIcon from "@mui/icons-material/Savings";

const arr = [
  {
    text: "Зарегистрируйтесь.",
    icon: (
      <AccountBoxIcon sx={{ fontSize: "75px", color: "hsl(0, 0%, 66%)" }} />
    ),
  },
  {
    text: "Подтвердите личные данные.",
    icon: (
      <CheckCircleIcon sx={{ fontSize: "75px", color: "hsl(0, 0%, 66%)" }} />
    ),
  },
  {
    text: "Откройте счет в лучшем банке на свете!",
    icon: <SavingsIcon sx={{ fontSize: "75px", color: "hsl(0, 0%, 66%)" }} />,
  },
];

const variants = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: (i + 2) * 0.8,
    },
  }),
  hidden: { opacity: 0 },
};

function Home() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <main className={styles.wrapper}>
        <Grid
          sx={{
            height: "auto",
            display: "flex",
            alignItems: "center",
          }}
          container
        >
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
            item
            xs={6}
          >
            <Logo />
            <h1 className={styles.heading}>
              Станьте нашим партнером прямо сейчас
            </h1>
            <Button
              variant="contained"
              onClick={() => navigate("/registration/step1")}
              sx={{
                width: "225px",
                height: "60px",
                background: "hsla(5, 100%, 50%, 1)",
                fontFamily: "inherit",
                fontSize: "1rem",
              }}
            >
              Регистрация
            </Button>
          </Grid>
          <Grid sx={{ p: "3rem" }} item xs={6}>
            <motion.ul className={styles.steps}>
              {arr.map((el, i) => {
                return (
                  <motion.li
                    variants={variants}
                    custom={i}
                    key={Math.random() * 1000}
                    initial="hidden"
                    animate="visible"
                    className={styles.stepsItem}
                  >
                    {el.text}
                    {el.icon}
                  </motion.li>
                );
              })}
            </motion.ul>
          </Grid>
        </Grid>
      </main>
    </motion.div>
  );
}

export default Home;
