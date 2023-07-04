const http = require('http');
const data = require('./utils/data');


http
.createServer((request, response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(request.url.includes('/rickandmorty/character')) {
        const id = req.url.split('/').at(-1)
        
        const characterFound = data.find((character) => {
            return character.id === +id // También podría parsear usando Number(id)
        })

        res
        .writeHead(200, {"Content-type": "application/json"})
        .end(JSON.stringify(characterFound))
    }
})
.listen(3001)