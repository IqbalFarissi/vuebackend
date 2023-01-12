

const express = require('express');
var cors = require('cors')
const app = express();
const port = 80;
app.use(express.json());
app.use(cors())

app.get('/getlist', (req, res) => {
  res.send({ sensor_suhu: [{ suhu: 38, waktu: "2023-01-08 10:00" }, { suhu: 37, waktu: "2023-01-08 11:00" }, { suhu: 39, waktu: "2023-01-08 12:00" }] })
});

app.get('/helloworld', (req, res) => {
  res.send('Hello World!')
});

app.get('/home', (req, res) => {
    res.send("ini halaman home")
  });

app.get('/sensor2', (req, res) => {
    res.send({ sensor2: 100})
  });

  app.post('/sensorpost', (req, res) => {
    res.send("data yang terkirim adalah " + req.body.suhu);
  });

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});