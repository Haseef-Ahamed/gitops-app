const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || 'v3.0.0';

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

// Version endpoint - useful for testing rollbacks
app.get('/version', (req, res) => {
  res.json({
    version: VERSION,
    environment: process.env.APP_ENV || 'unknown'
  });
});

// Home endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'GitOps Demo App is running!',
    version: VERSION,
    environment: process.env.APP_ENV || 'unknown'
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
  console.log(`Version: ${VERSION}`);
});
