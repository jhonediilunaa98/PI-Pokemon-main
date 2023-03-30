

const getPokemonsHandler = (req, res)=>{
    res.send("trae todos los pokeemons")
};


const getPokemonsIdHandler=(req, res)=>{
    res.send("trae los pokemosn por ID")
};


const createPokemonsHandler = (req, res)=>{
    res.send("Crea  pokeemons")
};



module.exports ={
    getPokemonsHandler,
    getPokemonsIdHandler,
    createPokemonsHandler,
}