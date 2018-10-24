const express = require('express');
const app = express();
// const useragent = require('express-useragent');


app.get('/', (request, response) => {
    

    response.send({
        "ipaddress" : request.ip,
        "accept-languages" : request.acceptsLanguages(),
        "user-agent" : request.headers['user-agent']
    })
});


const port = 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));



















