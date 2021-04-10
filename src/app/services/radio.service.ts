import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Radio } from 'src/app/models/radio'

@Injectable({
  providedIn: 'root'
})
export class RadioService {
  private baseUrl= 'http://localhost:8081/telecel-site/radios';


  constructor(private http: HttpClient) { }

  /**
   * Obtenir une radio par son id
   * @param id
   */
  getRadio(id: number): Observable<any> {
    return this.http.get('/htttp://localhost:8081/telecel-site/radios/${id}');
  }

   /**
     * Obtenir la liste des radios du serveur back end.
     */

    getRadioList(): Observable<any> {
      let headers = new HttpHeaders();
      headers.append('content-type', 'application/json');
      headers.append('accept', 'application/json')
      return this.http.get(`${this.baseUrl}`);
    }



/**
     * Ajout de nouvelles radios dans la base de données.
     * @param radio
     */
    saveRadio(radio: Radio): Observable<Radio> {
      return this.http.post<Radio>('http://localhost:8081/telecel-site/radios', radio);
  }
  
  /**
   * Mise à jour des radios dans la base de données.
   * @param radio
   */
   updateRadio(id: number, radio: Radio): Observable<Radio> {
       return this.http.patch<Radio>('http://localhost:8081/telecel-site/radios', radio);
   }
   
   /**
    * Supprimer des radios dans la base de données.
    * @param radio
    */
    deleteRadio(radio: Radio): Observable<string> {
        return this.http.delete<string>('http://localhost:8081/telecel-site/radios/'+radio.id);
    }

    /**
     * *Obtenir la radio d'un site
     * @param nom
     */
    getSiteRadio(nom: string): Observable<any> {
      return this.http.get('http://localhost:8081/telecel-site/radios/search/siteradio?nom='+nom);
    }
}
