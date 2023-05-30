import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/User.model";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";


const saveNewUser = async ({ email, password, name }: User) => {

    // Busco el usuario en la base de datos
    const checkUser = await UserModel.findOne({ email: email });

    // Si existe devuelvo un error
    if (checkUser) return 'Usuario ya existe';

    const passHash = await encrypt(password);

    // Creo el usuario
    const registerNewUser = await UserModel.create({ email, password: passHash, name })

    return registerNewUser;

}


const loginUser = async ({ email, password }: Auth) => {

    // Busco el usuario en la base de datos
    const checkUser = await UserModel.findOne({ email: email })

    // Si existe devuelvo un error
    if (!checkUser) return 'Usuario no existe';

    // Password encriptada de la base de datos 
    const passHash = checkUser.password

    // Comparo la que viene de la base de datos con la que ingresa el usuario
    const isCorrect = await verified(password, passHash);

    // Retorno un mensaje si los datos no son correctos
    if (!isCorrect) return "Datos incorrectos"

    // Genero el token
    const token = generateToken(checkUser.email)

    const data = {
        token: token,
        user: checkUser
    }

    return data;

}

export { saveNewUser, loginUser }