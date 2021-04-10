import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pylone } from 'src/app/models/pylone';

@Injectable({
  providedIn: 'root'
})
export class PyloneService {
  private baseUrl= 'http://localhost:8081/telecel-site/pylones';


  constructor(private http: HttpClient) { }

  /**
   * Obtenir un pylone par son id.
   * @param id
   */
  getPylone(id:number): Observable<any>{
    return this.http.get('http;//localhost:8081/telecel-site/pylones/${id}');

  }

  /**
     * Obtenir la liste des pylones du serveur back end.
     */

    getPyloneList(): Observable<any> {
      let headers = new HttpHeaders();
      headers.append('content-type', 'application/json');
      headers.append('accept', 'application/json')
      return this.http.get(`${this.baseUrl}`);
    }



/**
     * Ajout de nouveaux pylones dans la base de données.
     * @param pylone
     */
    savePylone(pylone: Pylone): Observable<Pylone> {
      return this.http.post<Pylone>('/telecel-site/pylones', pylone);
  }
  
  /**
   * Mise à jour des pylone dans la base de données.
   * @param pylone
   */
   updatePylone(id: number, pylone: Pylone): Observable<Pylone> {
       return this.http.patch<Pylone>('http://localhost:8081/telecel-site/pylones', pylone);
   }
   
   /**
    * Supprimer des pylones dans la base de données.
    * @param pylone
    */
    deletePylone(pylone: Pylone): Observable<string> {
        return this.http.delete<string>('http://localhost:8081/telecel-site/pylones/'+pylone.id);
    }

    /**
     * *Obtenir le pylone d'un site
     * @param nom
     */
    getSitePylone(nom: string): Observable<any> {
      return this.http.get('http://localhost:8081/telecel-site/pylones/search/sitepylone?nom='+nom);
    }
}
