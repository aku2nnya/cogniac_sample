const express = require('express');
const path = require('path');
const morgan = require('morgan');


const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/data', (req, res) => res.send({ test: 'Hello' }));

app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`));
