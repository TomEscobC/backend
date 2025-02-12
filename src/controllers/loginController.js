const Client = require("../models/userModels");

router.post('/login', express.json(), async (req, res) =>{
    const {username, password} = req.body; 

    try{
        //Busca el usuario en la base de datos
        const user = await user.findOne({username});
        //Si no se encuentra el usuario
        if (!user){
            return res.status(401).json({ message: 'Usuario no autorizado' });
        }
    }

    //Verificar la contraseña
    const matchPass = await user.comparePassword(password);

    if (!matchPass){
        return res.status(401).json({ message: 'Contraseña incorrecta, inténtelo de nuevo' });
    }

} 
)