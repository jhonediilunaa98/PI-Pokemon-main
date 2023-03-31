const {createPokemon} = require("../controllers/pokemonsController")

const getPokemonsHandler = (req, res)=>{
    const {name} =req.query;
     if(name) res.send(`quiero todos los nombres ${name}`);
     else res.send("trae todos los pokeemons");
     

};


const getPokemonsIdHandler=(req, res)=>{
    const {id} = req.params;
    res.send(` trae los pokemosn por id ${id}`)
};


const createPokemonsHandler = async (req, res)=>{
    try {
        const {name} = req.body;
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