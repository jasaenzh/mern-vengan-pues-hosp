import { Apartment } from "../interfaces/apartment.interface"
import ApartamentModel from "../models/Apartament.model"


const getApartaments = async () => {

    const getAllApartaments = await ApartamentModel.find({});
    return getAllApartaments;

}

const registerApartament = async (apartament: Apartment) => {

    const registerApartament = await ApartamentModel.create(apartament);
    return registerApartament;

}

export { getApartaments, registerApartament }