import { Stack, Typography } from "@mui/material";
import React from "react";
import crocguy from '../assets/crocguy.webp'

const Home = () => {
  return (
    <Stack
      direction="column"
      spacing={1}
      justifyContent="space-between"
      alignItems="center"
      textAlign="center"
    >
      <Typography
        variant="h4"
        sx={{
          my: 3,
          fontFamily: 'monospace',
          fontWeight: 400,
          fontSize: { xs: 24, md: 36 },
          letterSpacing: { xs: 'none', md: '.2rem'},
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Welcome to the Croc Pit!
      </Typography>
      <img src={crocguy} alt="croc guy" style={{ borderRadius: "1px" }}/>
    </Stack>
  );
}

export default Home;