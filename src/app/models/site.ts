import { from } from "rxjs";
import {Batterie} from 'src/app/models/batterie';
import {Energie} from 'src/app/models/energie';
import {Pylone} from 'src/app/models/pylone';
import {Radio} from 'src/app/models/radio';
import {Trans} from 'src/app/models/trans';

export class Site {
    id: number;
    nom: string;
    technologie: string;
    typologie: string;
    zem: string;
    latitude: number;
    longitude: string;
    batterie: Batterie = new Batterie();
    energie: Energie = new Energie();
    pylone: Pylone = new Pylone();
    radio: Radio = new Radio();
    trans: Trans = new Trans();


}