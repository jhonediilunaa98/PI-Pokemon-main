const {Router} = require('express')
const typesRouter = Router()

typesRouter.get('/types',(req, res) =>{
    res.send('estoy en TypesRouter')
 })


module.exports = typesRouter;