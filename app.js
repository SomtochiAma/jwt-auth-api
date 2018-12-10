// const express = require('express');
const app = require('./server/server');
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Magic happens on port ${PORT}`)
})