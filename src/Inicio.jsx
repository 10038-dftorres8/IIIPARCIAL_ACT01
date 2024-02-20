import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import SchoolIcon from '@mui/icons-material/School';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import GroupIcon from '@mui/icons-material/Group';
import CodeIcon from '@mui/icons-material/Code';
import PythonIcon from '@mui/icons-material/Code';
import Grid from '@mui/material/Grid';

const Inicio = () => {
  return (
    <Grid container spacing={4} sx={{ padding: '50px', textAlign: 'center' }}>
      {/* Apartado 1: Introducción personal */}
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          ¡Hola, soy Diego Fernando Torres Guerrero!
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '600px', margin: '0 auto' }}>
          Tengo 21 años y soy originario de Ecuador.
        </Typography>
      </Grid>

      {/* Apartado 2: Niveles de estudio */}
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom sx={{ marginTop: '40px' }}>
          Niveles de Estudio
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '600px', margin: '0 auto' }}>
          Mis niveles de estudio incluyen:
          <List>
            <ListItem>
              <SchoolIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Escuela - Unidad Educativa Marista PIO XII" />
            </ListItem>
            <ListItem>
              <SchoolIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Colegio - Unidad Educativa Marista PIO XII" />
            </ListItem>
            <ListItem>
              <SchoolOutlinedIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Universidad - Universidad de las Fuerzas Armadas ESPE" />
            </ListItem>
          </List>
        </Typography>
      </Grid>

      {/* Apartado 3: Cursos realizados */}
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom sx={{ marginTop: '40px' }}>
          Cursos Realizados
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '600px', margin: '0 auto' }}>
          Mis cursos incluyen:
          <List>
            <ListItem>
              <CodeIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Linux" />
            </ListItem>
            <ListItem>
              <PythonIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Python" />
            </ListItem>
            <ListItem>
              <GroupIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="C++" />
            </ListItem>
          </List>
        </Typography>
      </Grid>

      {/* Apartado 4: Virtudes y destrezas */}
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom sx={{ marginTop: '40px' }}>
          Virtudes y Destrezas
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '600px', margin: '0 auto' }}>
          Mis habilidades y destrezas incluyen el trabajo en equipo, dedicación y paciencia.
        </Typography>
      </Grid>

      {/* Columna adicional para la foto */}
      <Grid item xs={12} md={6}>
        {/* Agrega aquí el componente para mostrar tu foto */}
        <img src="./usu.png" alt="Tu Foto" style={{ maxWidth: '50%', height: 'auto' }} />
      </Grid>
    </Grid>
  );
};

export default Inicio;
