// src/pages/Home.js
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Menu from '../Components/Menu'; 
import Section from '../Components/Section'; // Ajuste o caminho conforme a estrutura do seu projeto 
import ProjectsSection from '../Components/Projeto'; // Importe o componente Projeto


const Home = () => {
  return (
    <>
      <Menu />
      <Section />
      <ProjectsSection />
    </>
  );
};

export default Home;
