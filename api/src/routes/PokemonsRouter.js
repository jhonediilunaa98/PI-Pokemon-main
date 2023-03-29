const {Router} = require('express')
const{getAll, getPokemonByName, getPokemons} = require('../controllers/getPokemons')
const pokemonsRouter = Router()

  pokemonsRouter.get('/',(req, res) =>{
    res.send('Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.')
 })

//  pokemonsRouter.get('/name',(req, res) =>{
  
//   res.send(' Esta ruta debe obtener todos aquellos pokemons que coinciden con el nombre recibido por query.')
// })
 

 pokemonsRouter.get('/:id',(req, res) =>{
  res.send(' Esta ruta obtiene el detalle de un pokemon específico.')
})



pokemonsRouter.post('/',(req, res) =>{
  res.send(' Esta ruta recibirá todos los datos necesarios para crear un pokemon')
})




module.exports = pokemonsRouter;
 