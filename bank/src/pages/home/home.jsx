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
        <Logo />
        <div className={styles.promo}>
          <h1 className={styles.heading}>
            Станьте нашим партнером прямо сейчас
          </h1>
          <Button
            variant="contained"
            onClick={() => navigate("/registration/step1")}
            style={{ background: "hsla(5, 100%, 50%, 1)" }}
            sx={{
              width: "225px",
              height: "60px",
              fontFamily: "inherit",
              fontSize: "1rem",
              mb: "2.5rem",
            }}
          >
            Регистрация
          </Button>
        </div>
        <div className={styles.list}>
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
        </div>
        <div style={{ height: "80px" }}></div>
      </main>
    </motion.div>
  );
}

export default Home;
