const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 3001; // Different port from React app

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Proxy endpoint for login
app.post('/api/auth/login', async (req, res) => {
  try {
    const response = await axios.post('http://10.0.6.50:8090/api/v1/auth/login', req.body, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    // Return the response from the backend
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Proxy error:', error.response ? error.response.data : error.message);
    
    // Return error response
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
});

app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
}); 