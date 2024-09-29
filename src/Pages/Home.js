// src/pages/Home.js
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
<<<<<<< HEAD
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
=======

const Home = () => {
  return (
    <Container>
      {/* Cabeçalho */}
      <header className="text-center my-5">
        <Typography variant="h3" component="h1" gutterBottom>
          Ana Luiza G. Luizão - Portfólio
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Desenvolvedora com foco em FrontEnd, BackEnd e ferramentas de integração.
        </Typography>
        <Button variant="contained" color="primary" href="#projects">
          Veja meus projetos
        </Button>
      </header>

      {/* Seção de Projetos */}
      <section id="projects" className="my-5">
        <Typography variant="h4" component="h2" gutterBottom>
          Projetos Recentes
        </Typography>
        <Grid container spacing={4}>
          {/* Exemplo de Projeto */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/300" // Adicione aqui a imagem do projeto
                alt="Projeto 1"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Projeto 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Descrição do projeto 1 com as tecnologias usadas e principais funcionalidades.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Adicione mais cards de projetos conforme necessário */}
        </Grid>
      </section>
    </Container>
>>>>>>> 246ce3167ff3fe159ac7a6374913265fc1ac5ce8
  );
};

export default Home;
