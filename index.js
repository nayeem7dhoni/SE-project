const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to receive encrypted data and store it
app.post('/store-data', (req, res) => {
  const encryptedData = req.body.encryptedData;

  // Store encrypted data in a file
  fs.appendFile('encrypted-data.txt', encryptedData + '\n', (err) => {
    if (err) {
      console.error('Error storing data:', err);
      res.status(500).send('Error storing data');
    } else {
      console.log('Data stored successfully');
      res.status(200).send('Data stored successfully');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
