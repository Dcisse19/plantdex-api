import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PlantEntity } from "./PlantEntity";

@Entity({name: "categorie", schema: 'public'})
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column({ nullable: false })
    nom?: string;

    @OneToMany((type) => PlantEntity, (plant) => plant.categorie, {cascade: true})
    plants?: PlantEntity[];

    public deletePlants(plants: PlantEntity[]){
        this.plants = [];
        plants.map((plant) => plant.categorie = undefined);
    }
}