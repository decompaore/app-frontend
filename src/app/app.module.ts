import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminBatterieComponent } from './administration/admin-batterie/admin-batterie.component';
import { AdminEnergieComponent } from './administration/admin-energie/admin-energie.component';
import { AdminGenerateurComponent } from './administration/admin-generateur/admin-generateur.component';
import { AdminPyloneComponent } from './administration/admin-pylone/admin-pylone.component';
import { AdminRadioComponent } from './administration/admin-radio/admin-radio.component';
import { AdminSiteComponent } from './administration/admin-site/admin-site.component';
import { AdminTransComponent } from './administration/admin-trans/admin-trans.component';
import { AjoutBatterieComponent } from './administration/ajout-batterie/ajout-batterie.component';
import { AjoutEnergieComponent } from './administration/ajout-energie/ajout-energie.component';
import { AjoutGenerateurComponent } from './administration/ajout-generateur/ajout-generateur.component';
import { AjoutPyloneComponent } from './administration/ajout-pylone/ajout-pylone.component';
import { AjoutRadioComponent } from './administration/ajout-radio/ajout-radio.component';
import { AjoutSiteComponent } from './administration/ajout-site/ajout-site.component';
import { AjoutTransComponent } from './administration/ajout-trans/ajout-trans.component';
import { UpdateBatterieComponent } from './administration/update-batterie/update-batterie.component';
import { UpdateEnergieComponent } from './administration/update-energie/update-energie.component';
import { UpdateGenerateurComponent } from './administration/update-generateur/update-generateur.component';
import { UpdatePyloneComponent } from './administration/update-pylone/update-pylone.component';
import { UpdateRadioComponent } from './administration/update-radio/update-radio.component';
import { UpdateSiteComponent } from './administration/update-site/update-site.component';
import { UpdateTransComponent } from './administration/update-trans/update-trans.component';
import { RechercheTechnicienComponent } from './installation/recherche-technicien/recherche-technicien.component';
import { SiteListComponent } from './installation/site-list/site-list.component';
import { BackToMenuComponent } from './menu/back-to-menu/back-to-menu.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MessageModalComponent } from './modal/message-modal/message-modal.component';
import { HttpClient } from '@angular/common/http';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { from } from 'rxjs';
import { RechercheBatterieComponent } from './installation/recherche-batterie/recherche-batterie.component';
import { RechercheEnergieComponent } from './installation/recherche-energie/recherche-energie.component';
import { RechercheGenerateurComponent } from './installation/recherche-generateur/recherche-generateur.component';
import { RecherchePyloneComponent } from './installation/recherche-pylone/recherche-pylone.component';
import { RechercheRadioComponent } from './installation/recherche-radio/recherche-radio.component';
import { RechercheSiteComponent } from './installation/recherche-site/recherche-site.component';
import { RechercheTransComponent } from './installation/recherche-trans/recherche-trans.component';
import { KeycloakSecurityService} from './services/keycloak-security.service';

export function kcFactory(kcSecurity:KeycloakSecurityService) {
  return ()=> kcSecurity.init();
  
}





@NgModule({
  declarations: [
    AppComponent,
    AdminBatterieComponent,
    AdminEnergieComponent,
    AdminGenerateurComponent,
    AdminPyloneComponent,
    AdminRadioComponent,
    AdminSiteComponent,
    AdminTransComponent,
    AjoutBatterieComponent,
    AjoutEnergieComponent,
    AjoutGenerateurComponent,
    AjoutPyloneComponent,
    AjoutRadioComponent,
    AjoutSiteComponent,
    AjoutTransComponent,
    UpdateBatterieComponent,
    UpdateEnergieComponent,
    UpdateGenerateurComponent,
    UpdatePyloneComponent,
    UpdateRadioComponent,
    UpdateSiteComponent,
    UpdateTransComponent,
    RechercheTechnicienComponent,
    RechercheBatterieComponent,
    RechercheEnergieComponent,
    RechercheGenerateurComponent,
    RecherchePyloneComponent,
    RechercheRadioComponent,
    RechercheSiteComponent,
    RechercheTransComponent,
    SiteListComponent,
    BackToMenuComponent,
    MenuComponent,
    MessageModalComponent


    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [
    {provide:APP_INITIALIZER,deps:[KeycloakSecurityService],useFactory:kcFactory,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {//console.log('administration-module');}
}
}