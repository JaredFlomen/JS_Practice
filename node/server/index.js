//Simple web server
const express = require('express');
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/dogs', (req, res) => {
  console.log(req.body);
  res.send('Jared');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
