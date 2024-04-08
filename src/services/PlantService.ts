import AppDataSource from "../data-source";
import { PlantEntity } from "../entities/PlantEntity";
// import AppDataSource from "../data-source";
class PlantService {
  private plantRepository = AppDataSource.getRepository(PlantEntity);

  async getAll() {
    console.log("PlantService");
    return this.plantRepository.find({relations: {categorie: true}});
  }
  async getById(id: number) {
    console.log("PlantService");
    return this.plantRepository.findOne({where : {id: id}, relations: {categorie: true}});
  }
  async create(plant: PlantEntity) {
    console.log("PlantService");
    const newPlant = this.plantRepository.create(plant);
    return this.plantRepository.save(newPlant);
  }
  async update(id: string, plant: PlantEntity) {
    console.log("PlantService");
    return this.plantRepository.update(id, plant);
  }

  async delete(id: string) {
    console.log("PlantService");
    return this.plantRepository.delete(id);
  }
}

export default PlantService;
