import { Schema, Types, model, Model } from 'mongoose';
import { User } from '../interfaces/user.interface';

const UserSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: "Hola soy un usuario"
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

// Creo el modelo User
const UserModel = model('users', UserSchema);
export default UserModel;