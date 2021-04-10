import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Site} from 'src/app/models/site';
import { Batterie } from 'src/app/models/batterie';
import { Energie } from 'src/app/models/energie';
import { Pylone } from 'src/app/models/pylone';
import { Radio } from 'src/app/models/radio';
import { Trans } from 'src/app/models/trans';


@Injectable({
  providedIn: 'root'
})
export class SiteService {
  
private baseUrl= 'http://localhost:8081/telecel-site/sites';
  constructor(private http: HttpClient) { }

  

  /**
   * Obtenir un site par son id.
   * @param id
   */
  getSite(id:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);

  }

/**
     * Obtenir la liste des sites du serveur back end.
     */

    getSiteList(): Observable<any> {
      let headers = new HttpHeaders();
      headers.append('content-type', 'application/json');
      headers.append('accept', 'application/json') 
      return this.http.get(`${this.baseUrl}`)
    }

    /**
     * Obtenir un site par son nom du serveur back end.
     * @param nom
     */
    getSiteByNom(nom: string): Observable<any> {
      return this.http.get('http://localhost:8081/telecel-site/sites/search/bynom?nom='+nom);

    }

    /**
     * Obtenir les sites par zem du serveur back end.
     * @param zem
     */
    getSiteByZem(zem: string): Observable<any> {
      return this.http.get('http://localhost:8081/telecel-site/sites/search/byzem?zem='+zem);

    }

    /**
     * Obtenir les sites par la technologie du serveur back end.
     * @param tech
     */
    getSiteByTech(tech: string): Observable<any> {
      return this.http.get('http://localhost:8081/telecel-site/sites/search/bytech?tech='+tech);

    }

    /**
     * Obtenir les sites par typologie du serveur back end.
     * @param typo
     */
    getSiteByTypo(typo: string): Observable<any> {
      return this.http.get('http://localhost:8081/telecel-site/sites/search/bytypo?typo='+typo);

    }

    /**
     * Obtenir les sites par constructeur de la transmission du serveur back end.
     * @param constructeur
     */
    getSiteByTrans(constructeur: string): Observable<any> {
      return this.http.get('http://localhost:8081/telecel-site/sites/search/trans?constructeur='+constructeur);
      
    }

    /**
     * Obtenir les site par la capacité de la transmission du serveur back end.
     * @param cap
     */
    getSiteByTransCap(cap: string): Observable<any> {
      return this.http.get('http://localhost:8081/telecel-site/sites/search/transcap?cap='+cap);

    }

    /**
     * Obtenir les sites par type de station de base du serveur back end.
     * @param base
     */
    getSiteByStationBase(base: string): Observable<any> {
      return this.http.get('http://localhost:8081/telecel-site/sites/search/stationdebase?base='+base);

    }

    /**
     * Obtenir les sites par la configuration radio du serveur back end.
     * @param config
     */
    getSiteByConfig(config: string): Observable<any> {
      return this.http.get('http://localhost:8081/telecel-site/sites/search/config?config='+config);

    }

    /**
     * Obtenir les sites par le type de transmission du serveur back end.
     * @param type
     */
    getSiteByTypeTrans(type: string): Observable<any> {
      return this.http.get('http://localhost:8081/telecel-site/sites/search/typetrans?type='+type);

    }

    /**
     * Obtenir les sites en fonction du proprietaire du pylone du serveur back end.
     * @param terrain
     */
    getSiteByTerrain(terrain: string): Observable<any> {
      return this.http.get('http://localhost:8081/telecel-site/sites/search/terrain?terrain='+terrain);

    }

/**
     * Enregistrer un nouveau site dans le serveur de base de données.
     * @param site
     */
    saveSite(site: Object): Observable<Object>{
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      return this.http.post(`${this.baseUrl}`, site, { headers: headers});
  }

/**
      * Mise à jour d'un site au niveau du serveur de base de données.
      * @param site
      */
  /**
   * updateSite(site: Site): Observable<any>{
    
      return this.http.patch(`${this.baseUrl}`, site);
  }
   *  */  updateSite(site: Site): Observable<any>{
           const headers = new HttpHeaders({'Content-Type': 'application/json'});
      return this.http.put(`${this.baseUrl}`, site, { headers: headers});
  }

  /**
       * Supprimer un site existant dans la base de données.
       * @param site
       */
      deleteSite(id: number): Observable<any>{
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }






}
