import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Success = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <CheckCircleIcon
            sx={{
              fontSize: 60,
              color: 'success.main',
              marginBottom: 2,
            }}
          />
          <Typography component="h1" variant="h5" gutterBottom>
            Login Successful!
          </Typography>
          <Typography variant="body1" color="text.secondary" align="center">
            You have successfully logged in to your account.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Success; 