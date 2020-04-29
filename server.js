require('./helpers/helpers');

const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {   

    res.render('home', {
        nombre: 'Alberto',
    });
});

app.get('/about', (req, res) => {   

    res.render('about', {
        nombre: 'Alberto',
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});