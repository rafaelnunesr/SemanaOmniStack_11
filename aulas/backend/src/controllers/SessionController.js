const connection = require('../database/connection')

module.exports = {
    async create(request, response){
        const { id } = request.body

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first() // retorna um unico resultado e nao um array, ja que existe apenas uma ong com o id passado

        if(!ong){
            return response.status(400).json({ err: 'No ONG found with this ID'})
        }

        return response.json(ong)
    }
}