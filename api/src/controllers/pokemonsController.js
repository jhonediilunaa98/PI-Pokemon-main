const {Pokemon} = require("../db")
const axios = require("axios")
//const Pokemon = require("../models/Pokemon")


const createPokemon = async (name)=>
    await Pokemon.create({name});





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






 module.exports ={createPokemon, getPokemonById}