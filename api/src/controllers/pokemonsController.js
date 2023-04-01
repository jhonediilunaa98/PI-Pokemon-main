const {Pokemon} = require("../db")
const axios = require("axios")
//const Pokemon = require("../models/Pokemon")


const createPokemonsHandler = async (req, res) => {
    try {
        let { name, hp, attack, defense, speed, height, weight, imgUrl, types, custom } = req.body;
        const pokemonDb = await Pokemon.findAll();
        let id = 251 + pokemonDb.length;
        const find = await Pokemon.findOne({ where: {name: name}})

        
        if (!name || !hp || !attack || !defense || !speed || !height || !weight || !types) throw new Error ("Missing parameters");
        if (find) throw new Error ("Pokemon already exists");
        if (!imgUrl) imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png";

        const newPokemon = { id: ++id, name, hp, attack, defense, speed, height, weight, imgUrl, custom }
        const create = await Pokemon.create(newPokemon);

        let pokemonType = await Type.findAll({where: {name: types}});
        await create.addType(pokemonType);

        res.status(200).send("Pokemon successfully Created");
    } catch (error) {
        res.status(400).send(error.message);
    }
};





    const getPokemonById =  async(id)=>{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        const result = response.data;
        return {
            id: result.id,
            name: result.name,
            hp: result.stats[0].base_stat,
            attack: result.stats[1].base_stat,
            defense: result.stats[2].base_stat,
            speed: result.stats[5].base_stat,
            height: result.height,
            weight: result.weight,
            imgUrl: result.sprites.other.home.front_default,
            custom: false,
            types: result.types.map((type) => type.type.name)
        };
    }






 module.exports ={createPokemonsHandler, getPokemonById}