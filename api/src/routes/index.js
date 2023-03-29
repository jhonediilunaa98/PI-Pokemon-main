const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const PokemonsRouters = require('./PokemonsRouter');
const types = require('./TypesRouter');




const router = Router();





// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', PokemonsRouters);
router.use('/types', types);


module.exports = router;
