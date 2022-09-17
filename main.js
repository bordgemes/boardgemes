const express = require('express');
const app = express();
const port = 3000;
app.set('view engine','hbs')

//routes
const routes = require('./routes/pages-router');
app.use('/',routes)

app.listen(port);