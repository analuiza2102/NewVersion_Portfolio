// src/components/ProjectsSection.js
import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import '../Styles/Projects.css'; // Importe o CSS personalizado

const projectsData = [
  { title: 'Layout', description: 'Use positioning to fix topbars, sidebars, and backgrounds.' },
  { title: 'Effects', description: 'Use effects like Transforms and Parallax scrolling.' },
  { title: 'Plugins', description: 'Connect your site to the most popular apps out there.' },
  { title: 'CMS', description: 'Run a blog, list job openings, or manage your event schedule.' },
  { title: 'Navigation', description: 'Visually structure your pages and link to them easily.' },
  { title: 'SEO', description: 'Build lightning-fast, globally optimized sites.' },
];

const ProjectsSection = () => {
  return (
    <Box className="projects-section">
      <Typography variant="h4" gutterBottom className="projects-title">
        Meus Projetos
      </Typography>
      <Grid container spacing={4} className="projects-grid">
        {projectsData.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="project-card">
              <CardContent>
                <Box className="project-image-placeholder"></Box> {/* Placeholder para imagem */}
                <Typography variant="h5" className="project-title">
                  {project.title}
                </Typography>
                <Typography variant="body2" className="project-description">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsSection;
