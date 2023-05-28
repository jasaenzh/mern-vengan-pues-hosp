import { Apartment } from "../interfaces/apartment.interface"
import ApartamentModel from "../models/Apartament.model"


const getApartaments = async () => {

    const getAllApartaments = await ApartamentModel.find({});
    return getAllApartaments;

}

const getApartament = async (id: string) => {
    const responseApartament = await ApartamentModel.findOne({ _id: id })
    const data = responseApartament ? responseApartament : "Apartamento no encontrado"
    return data;
}

const registerApartament = async (apartament: Apartment) => {

    const registerApartament = await ApartamentModel.create(apartament);
    return registerApartament;

}

const updateApartament = async (id: string, data: Apartment) => {
    const responseApartament = await ApartamentModel.findOneAndUpdate({ _id: id }, data, { new: true });
    const dataUpdated = responseApartament ? responseApartament : "Apartamento a actualizar no encontrado"
    return dataUpdated;
}

const deleteApartament = async (id: string) => {
    const responseApartament = await ApartamentModel.deleteOne({ _id: id });
    const dataDeleted = responseApartament ? responseApartament : "Apartamento a eliminar no encontrado";
    return dataDeleted;

}

export { getApartaments, registerApartament, getApartament, updateApartament, deleteApartament }