import { createSlice } from '@reduxjs/toolkit';
import { ApartamentInterface } from '../../interfaces/apartament.interface';

const ApartamentState: ApartamentInterface = {
    apartmentNumber: "",
    location: "",
    mtsArea: 0,
    price: 0,
    duplex: false,
    bedrooms: 0,
    doubleBeds: 0,
    singleBeds: 0,
    nestBed: 0,
    bathrooms: 0,
    hotWater: false,
    hairDryer: 0,
    livingRoom: false,
    diningRoom: 0,
    sofaBed: 0,
    television: 0,
    internet: false,
    kitchen: false,
    fridge: false,
    washingMachine: false,
    microwave: false,
    cafetera: false,
    blender: false,
    breadToaster: false,
    pressureCooker: false,
    riceCooker: false,
    sandwichBowl: false,
    securityCamera: false,
    terraceView: false,
}