const URL = 'https://rickandmortyapi.com/api/character/'
const axios = require('axios');


const getCharById = async (request, response) => {
    try {
        const { id } = request.params;
        const { data } = await axios(`${URL}/${id}`)

        if(!data.name) throw Error(`No se encuentra el personaje con ID: ${id}`)

        if(data.name) {
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status,
            }

            return response.status(200).json(character) // con return para que se corte la ejecución
        }

    } catch (error) {
        return error.message.includes('ID')
        ? response.status(400).send(error.message)
        : response.status(500).send(error.response.data.error) 
    }
};

module.exports = {
    getCharById
};