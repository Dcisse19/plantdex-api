import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Soleil } from "../models/types/Soleil.enum";
import { CategoryEntity } from "./CategoryEntity";
import { Category } from "../models/interfaces/Category";

@Entity({name: "plant", schema: 'public'})
export class PlantEntity {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column({ nullable: false })
    nom?: string;

    @Column({ nullable: false })
    soleil?: Soleil;

    @Column({ nullable: false })
    arrosage?: number;

    @Column({ nullable: false })
    plant_image?: string;

    @ManyToOne((type) => CategoryEntity, (categorie) => categorie.plants, {cascade: ["remove", "update", "insert"]})
    @JoinColumn({ name: "id_categorie" })
    categorie?: CategoryEntity; 
}