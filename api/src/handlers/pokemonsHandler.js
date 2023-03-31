

const getPokemonsHandler = (req, res)=>{
    const {name} =req.query;
     if(name) res.send(`quiero todos los nombres ${name}`);
     else res.send("trae todos los pokeemons");
     

};


const getPokemonsIdHandler=(req, res)=>{
    const {id} = req.params;
    res.send(` trae los pokemosn por id ${id}`)
};


const createPokemonsHandler = (req, res)=>{
    const {name} = req.body;
    res.send(`Crea  pokeemons con estos datos name:${name}`)
};



module.exports ={
    getPokemonsHandler,
    getPokemonsIdHandler,
    createPokemonsHandler,
}