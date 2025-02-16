const express = require('express')
const cors = require('cors')
const app = express();
const api = require('./api')

// Error handling middleware
app.use(cors())
app.use(express.json());
app.use('/api', api);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Define PORT
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});