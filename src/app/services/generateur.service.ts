import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Generateur } from 'src/app/models/generateur';

@Injectable({
  providedIn: 'root'
})
export class GenerateurService {
  private baseUrl= 'http://localhost:8081/telecel-site/generateurs';


  constructor(private http: HttpClient) { }

  /**
   * Obtenir un generateur par son id.
   * @param id
   */
getGenerateur(id: number):  Observable<any> {
  return this.http.get('/telecel-site/generateurs/${id}');
}

  /**
     * Obtenir la liste des générateurs du serveur back end.
     */

    getGenerateurList(): Observable<any> {
      let headers = new HttpHeaders();
      headers.append('content-type', 'application/json');
      headers.append('accept', 'application/json')
      return this.http.get(`${this.baseUrl}`);
    }



/**
     * Ajout de nouveaux générateurs dans la base de données.
     * @param generateur
     */
    saveGenerateur(generateur: Generateur): Observable<Generateur> {
      return this.http.post<Generateur>('/telecel-site/generateurs', generateur);
  }
  
  /**
   * Mise à jour des générateurs dans la base de données.
   * @param generateur
   */
   updateGenerateur(id: number, generateur: Generateur): Observable<Generateur> {
       return this.http.patch<Generateur>('/telecel-site/generateurs', generateur);
   }
   
   /**
    * Supprimer des générateurs dans la base de données.
    * @param generateur
    */
    deleteGenerateur(generateur: Generateur): Observable<string> {
        return this.http.delete<string>('/telecel-site/generateurs/'+generateur.id);
    }

    /**
     * *Obtenir la configuration énergétique d'un site
     * @param nom
     */
    getSiteGenerateur(nom: string): Observable<any> {
      return this.http.get('http://localhost:8081/telecel-site/generateurs/search/sitegenerateur?nom='+nom);
    }
    /**
     * Création ou ajout d'un nouveau générateur
     * @param generateur
     */
    createGenerateur(generateur: Object) {
      return this.http.post('telecel-site/generateurs', generateur);
    }
}
