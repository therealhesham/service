const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 4700;

// أي طلب يوصل هنا يتبعت للـ Service الداخلي
app.use(express.json());

app.all('/*', async (req, res) => {
  try {
    const serviceResponse = await axios({
      method: req.method,
      url: `http://localhost:4849`,
      data: req.body
    });
    res.status(serviceResponse.status).send(serviceResponse.data);
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

app.listen(PORT, () => {
  console.log(`Web App listening on port ${PORT}`);
});
