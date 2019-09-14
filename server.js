const express = require('express');

const app = express();

app.get('/ping', (request, response, nextFn) => {
    response.send("PONG");
});

app.listen(3000, () => {
    
    console.log("PingPong Server is running");
});