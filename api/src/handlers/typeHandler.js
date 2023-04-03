



const getTypeHandler = async (req, res) => {
    try {
        await getTypes();
        const types = await Type.findAll();
        return res.json(types);
    } catch (error) {
        res.status(400).send(error.message);
    }
};



module.exports = getTypeHandler