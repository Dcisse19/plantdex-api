import { Soleil } from "../types/Soleil.enum";

export interface Plant {
    id?: number;
    nom?: string;
    soleil?: Soleil;
    arrosage?: number;
    image?: string;
    categorie?: string;
}