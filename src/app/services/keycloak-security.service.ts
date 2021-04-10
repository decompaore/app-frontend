import { Injectable } from '@angular/core';
import { KeycloakInstance} from 'keycloak-js';

declare var Keycloak:any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {
  public kc:KeycloakInstance;

  constructor() { }
  async init(){
    console.log("Initialisation de la sécurité...");
    this.kc= new Keycloak({
      url:"http://localhost:8080/auth",
      realm:"Telecle-installation-realm",
      clientId:"telecel-site-client"
    });
    await this.kc.init({
      onLoad:'login-required'
    })
    
  }

  
}
