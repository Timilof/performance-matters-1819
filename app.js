const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const path = require('path');
const router = require('./router/router');
const fs = require('fs')

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use((req, res, next) => {
// todo: set cache header to 1 year
res.setHeader('Cache-Control', 'max-age=' + 365 * 24 * 60 *
60);
 next();
});

app.use(express.static('src/css'))
app.use(express.static('src/img'))
// app.get('/:id', detail);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/', router);

app.listen(port, () => console.log(`OBA app listening on port ${port}!`))
