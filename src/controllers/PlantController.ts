import { Request, Response } from "express";
import PlantService from "../services/PlantService";
import { mapPlantEntity } from "../services/PlantMapper";
import { PlantEntity } from "../entities/PlantEntity";

class PlantController {
  private plantService = new PlantService();

  async getAll(req: Request, res: Response) {
    console.log("PlantController");

    try {
      const plantEntities = await this.plantService.getAll();
      const plants = plantEntities.map((entity: PlantEntity) => mapPlantEntity(entity));
      res.send({ status: "OK", data: plants });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async getById(req: Request, res: Response) {
    console.log("PlantController");

    try {
      const plantEntity = await this.plantService.getById(Number(req.params.id));
      const plant = mapPlantEntity(plantEntity!);
      res.send({ status: "OK", data: plant });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async create(req: Request, res: Response) {
    
    try {
      const plantEntity = await this.plantService.create(req.body);
      console.log("PlantController - plantEntity : ", plantEntity);
      const plant = mapPlantEntity(plantEntity);
      res.send({ status: "OK", data: plant });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async update(req: Request, res: Response) {
    console.log("PlantController");

    try {
      const plant = await this.plantService.update(req.params.id, req.body);
      res.send({ status: "OK", data: plant });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async delete(req: Request, res: Response) {
    console.log("PlantController");

    try {
      const plant = await this.plantService.delete(req.params.id);
      res.send({ status: "OK", data: plant });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }
}

export default PlantController;
