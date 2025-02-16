const express = require('express');
const { WebSocketServer } = require('ws');

const app = express();

app.use(express.static('./public'));

app.listen(5000, () => console.log('listen on port 5000'));