const user = require('../utils/users')

const login = (request, response) => {
    const { email, password } = request.query
    
    const userFound = user.find((user) => user.email === email && user.password === password)

    if(userFound) return response.status(200).json({ access: true });
    
    return response.status(200).json({ access: false })
}

module.exports = {
    login
};