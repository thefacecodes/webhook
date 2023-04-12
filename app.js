const express = require('express')
const app = express()
app.use(express.json());
const port = 3000

app.post('/webhook', (req, res) => {
  console.log(req.body.data);
  res.status(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});