const {Router} = require('express')
const router = Router()

router.get('/',(req, res) =>{
    res.send('Obtiene un arreglo con todos los tipos de pokemones.')
 })


module.exports = router;