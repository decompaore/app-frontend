import {Site} from 'src/app/models/site';
export class Generateur {

    id: number;
    cuve: string;
    fabriquant: number;
    kva: string;
    site: Site = new Site()
}