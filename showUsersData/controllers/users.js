// const axios = require('axios')
var fs = require('fs')

const getAllUsers = async (req, res) => {
        // const users = await axios.get('https://jsonplaceholder.typicode.com/users')
        // res.status(200).json(users.data)
        const users = fs.readFileSync('./users/users.txt', 'utf8')
        res.status(200).json(users)
}

module.exports = {
    getAllUsers
}