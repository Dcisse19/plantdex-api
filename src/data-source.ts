import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { PlantEntity } from "./entities/PlantEntity";
import { CategoryEntity } from "./entities/CategoryEntity";
import { UserEntity } from "./entities/UserEntity";
dotenv.config({ path: ".env.local" });
const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: [PlantEntity, CategoryEntity, UserEntity]
});
export default AppDataSource;
