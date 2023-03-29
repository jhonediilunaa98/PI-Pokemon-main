const {Router} = require('express')
const pokemonsRouter = Router()

  pokemonsRouter.get('/api',(req, res) =>{
    res.send('ok')
 })


module.exports = pokemonsRouter;
