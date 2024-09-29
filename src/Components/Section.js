// src/components/Section.js
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import '../Styles/Section.css'; // Importa o arquivo CSS

const Section = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [sectionClass, setSectionClass] = useState('expanded');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      // Verifica a posição do scroll e aplica as classes conforme necessário
      if (position > 100) {
        setSectionClass('shrunk');
      } else {
        setSectionClass('expanded');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box className={`section-container ${sectionClass}`}>
      {/* Área de Texto */}
      <Box className="text-area">
        <Typography variant="h3" gutterBottom className="text-title">
          Conheça Meu Propósito
        </Typography>
        <Typography variant="body1" paragraph>
          Da natureza, aprendi a importância de manter o essencial. Da família, o valor de incluir e respeitar todos. São esses princípios que aplico em cada projeto. Descubra mais sobre mim e como posso colaborar com suas iniciativas.
        </Typography>
      </Box>

      {/* Área da Imagem */}
      <Box className="image-container">
        <img
          src="https://i.postimg.cc/mDtX52Cf/Design-sem-nome-enhanced.png"
          alt="Imagem de Propósito"
          className="image"
        />
      </Box>
    </Box>
  );
};

export default Section;
