const {Router} = require('express')
const{getAll, getPokemonByName, getPokemons, getPokemonById} = require('../controllers/getPokemons')
const pokemonsRouter = Router()

  pokemonsRouter.get('/',(req, res) =>{
    res.send('Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.')
 })

//  pokemonsRouter.get('/name',(req, res) =>{
  
//   res.send(' Esta ruta debe obtener todos aquellos pokemons que coinciden con el nombre recibido por query.')
// })
 

 pokemonsRouter.get('/:id', async(req, res) =>{
  try{
  const {id} = req.params;
  if(id < 1281){
    const response = await getPokemonById(id)
    return res.status(200).send(response)
  } else{
     const fronDb = getPokemonByIdFromDb(id)
     return res.status(200).send(fronDb);
   }
  }catch(error){
    res.status(400).send(error.message)
  }
})



pokemonsRouter.post('/',(req, res) =>{
  res.send(' Esta ruta recibirá todos los datos necesarios para crear un pokemon')
})




module.exports = pokemonsRouter;
 