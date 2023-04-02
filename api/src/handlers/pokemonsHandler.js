//const { Router } = require("express");
const {getAll, 
    getPokemonById,
    getPokemonByIdFromDb,
    getPokemonByName,
    } = require("../controllers/pokemonsController")

const getPokemonsHandler = async (req, res) => {
    try {
        const { name } = req.query;
        
        if (name) {
            const pokemon = await getPokemonByName(name.toLowerCase());
            if (!pokemon){
                throw new Error("Pokemon not founded");
            } return res.status(200).send(pokemon);
        }
        const allPokemons = await getAll();
        return res.status(200).send(allPokemons);
    } catch (error) {
        res.status(400).send(error.message);
    }
};



const getPokemonsIdHandler= async (req, res)=>{
    const {id} = req.params;
    try {
        if (id <1010) {
            const response = await getPokemonById(id);
            return res.status(200).send(response);
        }else{
            const fromDb = await getPokemonByIdFromDb(id);
            return res.status(200).send(fromDb);
        }
    } catch (error) {
        res.status(400).json({erorr: error.message});
    }
    
};


const createPokemonsHandler = async (req, res)=>{
    let  {name,  hp, attack, defense, speed, height, weight, imgUrl, types, custom} = req.body;

    try {
        const pokemonDb = await createPokemon.findOne();
        let id = 1010 +pokemonDb.length;
        const find = await pokemonsRouter.findOne({where: {name: name}})

        if (!name || !hp || !attack || !defense || !speed || !height || !weight || !types) throw new Error ("Missing parameters");
        if (find) throw new Error ("Pokemon already exists");
        if (!imgUrl) imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png";

        const newPokemon = { id: ++id, name, hp, attack, defense, speed, height, weight, imgUrl, custom }
        const create = await Pokemon.create(newPokemon);


        let pokemonType = await Type.findAll({where: {name: types}});
        await create.addType(pokemonType);


        res.status(201).send("Pokemon successfully Created")
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }

};



module.exports ={
    getPokemonsHandler,
    getPokemonsIdHandler,
    createPokemonsHandler,
}