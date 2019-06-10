const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { getRecentDetections } = require('./cogniacAPI');


const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/data', getRecentDetections);

app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`));
