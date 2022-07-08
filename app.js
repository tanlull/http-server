const config = require('config');
const port = config.get("SERVER.port");
const host = config.get("SERVER.host");
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ 
        status:"OK",
        message: "Hello World",
    });
})

app.get('/hello', (req, res) => {
    res.json({ 
        status:"OK",
        message: "Hello World from hello",
    });
})

app.listen(port,host, () => {
  console.log(`Example app listening on ${host} port ${port}`)
})