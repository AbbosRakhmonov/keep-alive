const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { pingUrl } = process.env;

app.get('/', (req, res) => {
  res.send('Keep-alive service is running');
});

const pingVercel = async () => {
  try {
    const response = await fetch(pingUrl);
    console.log('Ping successful:', response.status);
  } catch (error) {
    console.error('Ping failed:', error);
  }
};

setInterval(pingVercel, 45 * 1000); // Ping Vercel every 60 minutes

app.listen(port, () => {
  console.log(`Keep-alive service listening at http://localhost:${port}`);
});
