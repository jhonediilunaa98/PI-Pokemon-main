const { response } = require("express");
const {createPokemon, getPokemonById} = require("../controllers/pokemonsController")

const getPokemonsHandler = (req, res)=>{
    const {name} =req.query;
     if(name) res.send(`quiero todos los nombres ${name}`);
     else res.send("trae todos los pokeemons");
     

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
    const {name} = req.body;
    try {
        const newPokemon = await createPokemon (name);
        res.status(201).json(newPokemon)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }

};



module.exports ={
    getPokemonsHandler,
    getPokemonsIdHandler,
    createPokemonsHandler,
}