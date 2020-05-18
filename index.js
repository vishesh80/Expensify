const express = require('express');
const server = express();

server.use(express.static('public'));
server.get('*',(req, res) => {
    res.sendFile(__dirname+'/public/index.html');
});

server.listen(3000, () => console.log('Server is listening at PORT 3000....'));
