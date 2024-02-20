import React from 'react';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';

const Contacto = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Ajusta el alto según tus necesidades
        padding: '20px',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contacto
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
          <PhoneIcon sx={{ marginRight: 1, color: '#64B5F6' }} />
          <Typography variant="body1">
            Celular: <a href="tel:+593993579627">0993579627</a>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
          <EmailIcon sx={{ marginRight: 1, color: '#4CAF50' }} />
          <Typography variant="body1">
            Correo: <a href="mailto:dftorres@espe.edu.ec">dftorres@espe.edu.ec</a>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LocationOnIcon sx={{ marginRight: 1, color: '#FF5722' }} />
          <Typography variant="body1">Ubicación: Quito Valle de los Chillos</Typography>
        </Box>
      </Box>
      {/* Aquí puedes agregar un formulario de contacto u otra información de contacto según tus necesidades */}
    </Box>
  );
};

export default Contacto;
