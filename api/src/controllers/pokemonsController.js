const {Pokemon} = require("../db")
//const Pokemon = require("../models/Pokemon")


const createPokemon = async (name)=>
    await Pokemon.create({name});






 module.exports ={createPokemon}