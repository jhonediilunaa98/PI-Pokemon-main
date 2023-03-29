const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonsRouter = require('./PokemonsRouter');
//const Pokemons = requiere('./Pokemons')



const router = Router();





// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemonsRouter);


module.exports = router;
