const express = require('express');
const app = express();
const port = 3000;

// Middleware ताकि server JSON data को पढ़ सके
app.use(express.json());

// CORS (Cross-Origin Resource Sharing) को enable करें
// यह ज़रूरी है ताकि आपका frontend code server से बात कर सके
const cors = require('cors');
app.use(cors());

// यह endpoint है जहाँ आपका frontend location data भेजेगा
app.post('/location-receiver', (req, res) => {
  const { latitude, longitude } = req.body;

  if (latitude && longitude) {
    // यहाँ आप location data को handle कर सकते हैं
    // जैसे कि इसे database में save करना या email करना
    console.log(`Received location from a user:`);
    console.log(`Latitude: ${latitude}`);
    console.log(`Longitude: ${longitude}`);

    // Frontend को एक success message भेजें
    res.status(200).json({ message: 'Location received successfully!' });
  } else {
    // अगर data incomplete है
    res.status(400).json({ message: 'Error: Incomplete location data.' });
  }
});

// Server को शुरू करें
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
  console.log(`Ready to receive location data at http://localhost:${port}/location-receiver`);
});