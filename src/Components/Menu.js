// src/components/Menu.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Menu = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#0a0909', // Cor do menu de navegação
        padding: '10px 20px',
        boxShadow: 'none', // Remove a sombra padrão
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>

        {/* Botões de Navegação */}
        <Box>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/" 
            sx={{ 
              fontSize: '16px',
              color: '#f5f5f5', // Cor dos botões
              textTransform: 'none', // Não transforma o texto em maiúsculo
              margin: 'auto',
              '&:hover': { 
                color: '#ffffff', 
                backgroundColor: '#444444', // Fundo ao passar o mouse
              },
            }}
          >
            Início
          </Button>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/projects" 
            sx={{ 
              fontSize: '16px',
              color: '#f5f5f5', 
              textTransform: 'none', 
              margin: 'auto',
              '&:hover': { 
                color: '#ffffff', 
                backgroundColor: '#444444', 
              },
            }}
          >
            Projetos
          </Button>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/about" 
            sx={{ 
              fontSize: '16px',
              color: '#f5f5f5', 
              textTransform: 'none', 
              margin: 'auto',
              '&:hover': { 
                color: '#ffffff', 
                backgroundColor: '#444444', 
              },
            }}
          >
            Sobre Mim
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
