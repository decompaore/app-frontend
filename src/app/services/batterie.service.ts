import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Batterie} from 'src/app/models/batterie';

@Injectable({
  providedIn: 'root'
})
export class BatterieService {
  private baseUrl= 'http://localhost:8081/telecel-site/batteries';

  constructor(private http: HttpClient) { }

  /**
   * Obtenir une batterie par son id
   * @param id
   */
  getBatterie(id: number): Observable<any> {
    return this.http.get('/http://localhost:8081telecel-site/batteries/${id}');

  } 

/**
     * Obtenir la liste des batteries du serveur back end.
     */

    getBatterieList(): Observable<any> {
      let headers = new HttpHeaders();
      headers.append('content-type', 'application/json');
      headers.append('accept', 'application/json')
      return this.http.get(`${this.baseUrl}`);
    }



/**
     * Ajout de nouvelles batteries dans la base de données.
     * @param batterie
     */
    saveBatterie(batterie: Batterie): Observable<Batterie>{
      return this.http.post<Batterie>('/telecel-site/batteries', batterie);
  }
  
  /**
   * Mise à jour des batteries dans la base de données.
   * @param batterie
   */
   updateBatterie(id: number, batterie: Batterie): Observable<Batterie>{
       return this.http.put<Batterie>('http://localhost:8081/telecel-site/batteries/${id}', batterie);
   }
   
   /**
    * Supprimer des batteries dans la base de données.
    * @param batterie
    */
    deleteBatterie(batterie: Batterie): Observable<string>{
        return this.http.delete<string>('http://localhost:8081/telecel-site/batteries/'+batterie.id);
    }

    /**
     * Rechercher les batteries d'un site
     * @param nom
     */
    getSiteBatterie(nom: string): Observable<any> {
      return this.http.get('http://localhost:8081/telecel-site/batteries/search/sitebatterie?nom='+nom);
    }
/**
 * Creation ou ajout d'un nouveau batterie
 * @param batterie
 */
  creatBatterie(batterie: Object){
    return this.http.post('http://localhost:8081/telecel-site/batteries', batterie);
  }
}
