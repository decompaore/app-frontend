import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { SiteListComponent } from './site-list/site-list.component';
import { RechercheUsagerComponent } from './recherche-usager/recherche-usager.component';
import { RechercheTechnicienComponent } from './recherche-technicien/recherche-technicien.component';
import { InstallationRoutingModule } from './installation-routing.module';
import { RechercheSiteComponent } from './recherche-site/recherche-site.component';
import { RechercheBatterieComponent } from './recherche-batterie/recherche-batterie.component';
import { RechercheEnergieComponent } from './recherche-energie/recherche-energie.component';
import { RechercheGenerateurComponent } from './recherche-generateur/recherche-generateur.component';
import { RecherchePyloneComponent } from './recherche-pylone/recherche-pylone.component';
import { RechercheRadioComponent } from './recherche-radio/recherche-radio.component';
import { RechercheTransComponent } from './recherche-trans/recherche-trans.component';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
    //InstallationRoutingModule 
  ], 
})
export class InstallationModule {
  constructor() {console.log('installation-module');}
 }
