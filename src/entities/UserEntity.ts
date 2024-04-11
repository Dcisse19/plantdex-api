import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "utilisateur", schema: 'public'})
export class UserEntity {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column({ nullable: false })
    email?: string;

    @Column({ nullable: false })
    password?: string;

}