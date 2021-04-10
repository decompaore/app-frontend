import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Energie } from 'src/app/models/energie'

@Injectable({
  providedIn: 'root'
})
export class EnergieService {
  private baseUrl= 'http://localhost:8081/telecel-site/energies';


  constructor(private http: HttpClient) { }


  /**
   * Obtenir une énergie par son id.
   * @param id
   */
getEnergie(id: number):  Observable<any> {
  return this.http.get('/telecel-site/energies/${id}');
}
  /**
     * Obtenir la liste des énergies du serveur back end.
     */

    getEnergieList(): Observable<any> {
      let headers = new HttpHeaders();
      headers.append('content-type', 'application/json');
      headers.append('accept', 'application/json')
      return this.http.get(`${this.baseUrl}`);
    }



/**
     * Ajout de nouvelles énergie dans la base de données.
     * @param energie
     */
    saveEnergie(energie: Energie): Observable<Energie>{
      return this.http.post<Energie>('/telecel-site/energies', energie);
  }
  
  /**
   * Mise à jour des énergies dans la base de données.
   * @param energie
   */
   updateEnergie(id:number, energie: Energie): Observable<Energie>{
       return this.http.patch<Energie>('/telecel-site/energies', energie);
   }
   
   /**
    * Supprimer des énergies dans la base de données.
    * @param energie
    */
    deleteEnergie(energie: Energie): Observable<string>{
        return this.http.delete<string>('/telecel-site/energies/'+energie.id);
    }

    /**
     * *Obtenir la configuration énergétique d'un site
     * @param nom 
     */
    getSiteEnergie(nom: string): Observable<any> {
      return this.http.get('http://localhost:8081/telecel-site/energies/search/siteenergie?nom='+nom);
    }
    /**
     * Création ou ajout d'une nouvelle énergie
     * @param energie
     */
    creatEnergie(energie: Object) {
      return this.http.post('telecel-site/energies', energie);
    }
}
