import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trans } from 'src/app/models/trans';

@Injectable({
  providedIn: 'root'
})
export class TransService {
  private baseUrl= 'http://localhost:8081/telecel-site/transes';


  constructor(private http: HttpClient) { }

  /**
   * Obtenir une trans par son id.
   * @param id
   */
  getTrans(id:number): Observable<any>{
    return this.http.get('http:localhost://localhost:8081/telecel-site/transes/${id}');

  }

   /**
     * Obtenir la liste des transmissions du serveur back end.
     */

    getTransList(): Observable<any> {
      let headers = new HttpHeaders();
      headers.append('content-type', 'application/json');
      headers.append('accept', 'application/json')
      return this.http.get(`${this.baseUrl}`);
    }



/**
     * Ajout de nouvelles transmissions dans la base de données.
     * @param trans
     */
    saveTrans(trans: Trans): Observable<Trans> {
      return this.http.post<Trans>('http://localhost:8081/telecel-site/transes', trans);
  }
  
  /**
   * Mise à jour des transmissions dans la base de données.
   * @param trans
   */
   updateTrans(id: number, trans: Trans): Observable<Trans> {
       return this.http.patch<Trans>('http://localhost:8081/telecel-site/transes', trans);
   }
   
   /**
    * Supprimer des pylones dans la base de données.
    * @param trans
    */
    deleteTrans(trans: Trans): Observable<string> {
        return this.http.delete<string>('http://localhost:8081/telecel-site/transes/'+trans.id);
    }

    /**
     * *Obtenir la transmission d'un site
     * @param nom
     */
    getSiteTrans(nom: string): Observable<any> {
      return this.http.get('http://localhost:8081/telecel-site/transes/search/sitetrans?nom='+nom);
    }
}
