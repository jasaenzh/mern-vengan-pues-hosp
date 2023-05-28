import { Schema, Types, model, Model } from 'mongoose';
import { Apartment } from '../interfaces/apartment.interface';

const ApartamentSchema = new Schema<Apartment>(
    {
        apartmentNumber: {
            type: String,
            required: [true, "El numero de apartmaneto es requerido"],
            trim: true,
            unique: true
        },
        location: {
            type: String,
            required: [true, "La ubicación es requerida"],
            trim: true
        },
        mtsArea: {
            type: Number,
            required: [true, "Area de metros cuadrado requerida"],
            validate: {
                validator: function (value: number) {
                    return value > 0
                },
                message: "El valor de mts debe de ser mayor que cero"
            }
        },
        price: {
            type: Number,
            required: [true, "El precio es requerido"],
            validate: {
                validator: function (value: number) {
                    return value >= 0;
                },
                message: "El precio debe ser mayor que cero",
            },
        },
        duplex: {
            type: Boolean,
            default: false,
        },
        bedrooms: {
            type: Number,
            required: [true, "El numero de habitaciones es requerida"],
            validate: {
                validator: function (value: number) {
                    return value > 0;
                },
                message: "El valor del numero de habitaciones, debe ser mayor que cero",
            },
        },
        doubleBeds: {
            type: Number,
            required: [true, "El numero de camas dobles es requerido"],
            validate: {
                validator: function (value: number) {
                    return value >= 0;
                },
                message: "El valor de camas dobles debe ser mayor que cero",
            },
        },
        singleBeds: {
            type: Number,
            required: [true, "El numero de camas sencillas es requerido"],
            validate: {
                validator: function (value: number) {
                    return value >= 0;
                },
                message: "El valor de camas sencillas debe ser mayor que cero",
            },
        },
        nestBed: {
            type: Number,
            required: [true, "El numero de camas tipo nido es requerida"],
            validate: {
                validator: function (value: number) {
                    return value >= 0;
                },
                message: "El valor de cama Nido debe ser mayor que cero",
            },
        },
        bathrooms: {
            type: Number,
            required: [true, "El numero de baños es requerido"],
            validate: {
                validator: function (value: number) {
                    return value > 0;
                },
                message: "El valor de baños debe ser mayor que cero",
            },
        },
        hotWater: {
            type: Boolean,
            default: false,
        },
        hairDryer: {
            type: Number,
            required: [true, "El numero de secador para el cabello es requerido"],
            validate: {
                validator: function (value: number) {
                    return value >= 0;
                },
                message: "El valor de numero de secadores, debe ser mayor que cero",
            },
        },
        livingRoom: {
            type: Boolean,
            default: false,
        },
        diningRoom: {
            type: Number,
            required: [true, "El numero de comedor es requerido"],
            validate: {
                validator: function (value: number) {
                    return value > 0;
                },
                message: "El valor de comedor, debe ser mayor que cero",
            },
        },
        sofaBed: {
            type: Number,
            required: [true, "El numero de sofa camas es requerido"],
            validate: {
                validator: function (value: number) {
                    return value > 0;
                },
                message: "El valor de sofa cama, debe ser mayor que cero",
            },
        },
        television: {
            type: Number,
            required: [true, "El numero de televisores es requerido"],
            validate: {
                validator: function (value: number) {
                    return value > 0;
                },
                message: "El valor de televisor, debe ser mayor que cero",
            },
        },
        internet: {
            type: Boolean,
            default: false,
        },
        kitchen: {
            type: Boolean,
            default: false,
        },
        fridge: {
            type: Boolean,
            default: false,
        },
        washingMachine: {
            type: Boolean,
            default: false,
        },
        microwave: {
            type: Boolean,
            default: false,
        },
        cafetera: {
            type: Boolean,
            default: false,
        },
        blender: {
            type: Boolean,
            default: false,
        },
        breadToaster: {
            type: Boolean,
            default: false,
        },
        pressureCooker: {
            type: Boolean,
            default: false,
        },
        riceCooker: {
            type: Boolean,
            default: false,
        },
        sandwichBowl: {
            type: Boolean,
            default: false,
        },
        securityCamera: {
            type: Boolean,
            default: false,
        },
        terraceView: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

// Creo el modelo
const ApartamentModel = model('apartament', ApartamentSchema);

export default ApartamentModel;