const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404)
        .send({
            error: 'something is wrong',
            name: 'todo app'
        });
});

app.get('/users', (req, res) => {
    res.send([
        { name: 'bob', age: 14 },
        { name: 'sue', age: 33 },
        { name: 'joe', age: 43 }
    ]
    );
})

app.listen(3000);

module.exports.app = app;