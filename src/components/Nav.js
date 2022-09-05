import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AdbIcon from '@mui/icons-material/Adb';
import { CartButton } from "./CartButton";
import { Container } from "@mui/system";

const Nav = ({itemTotal}) => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', lg: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to="/shopping-cart" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              The Croc Pit
            </Link>
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <MenuItem>
            <Typography textAlign="center">
              <Link to="/shopping-cart" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                Home
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography textAlign="center">
              <Link to="/shop" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                Shop
              </Link>
            </Typography>
          </MenuItem>
          <Button
            sx={{ ml: 'auto',  }}
            id="menu-appbar"
          >
            <Link to='/cart' style={{ color: 'white', textDecoration: 'none'}}> 
              <CartButton itemTotal={itemTotal} />
            </Link>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;