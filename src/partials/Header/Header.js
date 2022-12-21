import * as React from 'react'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { teal } from '@mui/material/colors'

import { useNavigate } from 'react-router-dom'

import HomeIcon from '@mui/icons-material/Home';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Person from '@mui/icons-material/Person';
import useStyles from './Header.style'




const Header = () => {

  const classes = useStyles()
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleNavigate = route => {
    navigate(route)
    handleToggleMenu()
  }

  return (
    // <Box sx={{ flexGrow: 1 }}>

    <>

      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => handleToggleMenu()}
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" className={classes.title}>
            Meu App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer PaperProps={{
        sx: {
          backgroundColor: teal['A400'],
          width: 200,
          borderRadius: ["0px 5px 5px 0px "]
        }
      }}
        open={menuOpen}
        onClose={() => handleToggleMenu()}>
        <List sx={{ textAlign: 'center' }}>
          <ListItemButton onClick={() => handleNavigate('/')}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => handleNavigate('customers')}>
            <ListItemIcon><Person /></ListItemIcon>
            <ListItemText>Lista de Clientes</ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => handleNavigate('customers/add')}>
            <ListItemIcon><PersonAdd /></ListItemIcon>
            <ListItemText>Cadastro de Clientes</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}


export default Header