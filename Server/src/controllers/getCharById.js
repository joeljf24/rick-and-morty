const URL = 'https://rickandmortyapi.com/api/character/'
const axios = require('axios');


const getCharById = (request, response) => {
    const { id } = request.params;

    axios(`${URL}/${id}`)
    .then(response => response.data)
    .then(({ name, gender, species, origin, image, status }) => {
        if(name) {
            const character = {
                id,
                name,
                gender,
                species,
                origin,
                image,
                status,
            }

            return response.status(200).json(character) // con return para que se corte la ejecución
        }

        return response.status(404).send('Not found')
    })

    .catch(error => response.status(500).send(error.message))
};

module.exports = {
    getCharById
};