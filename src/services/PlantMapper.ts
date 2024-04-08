import { PlantEntity } from "../entities/PlantEntity";
import { Plant } from "../models/interfaces/Plant";

export const mapPlantEntity = (plantEntity: PlantEntity): Plant => {
    
    const plant:Plant = {} as Plant;
    plant.id = plantEntity.id;
    plant.nom = plantEntity.nom;
    plant.arrosage = plantEntity.arrosage;
    plant.soleil = plantEntity.soleil;
    plant.image = plantEntity.plant_image;
    plant.categorie = plantEntity.categorie?.nom;

    return plant;
}
