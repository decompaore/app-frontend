import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UpdateBatterieComponent} from './update-batterie/update-batterie.component';
import { UpdateGenerateurComponent } from './update-generateur/update-generateur.component';
import { UpdateEnergieComponent } from './update-energie/update-energie.component';
import { UpdatePyloneComponent } from './update-pylone/update-pylone.component';
import { UpdateRadioComponent } from './update-radio/update-radio.component';
import { UpdateSiteComponent } from './update-site/update-site.component';
import { UpdateTransComponent } from './update-trans/update-trans.component';
import { AdminBatterieComponent } from './admin-batterie/admin-batterie.component';
import { AdminEnergieComponent } from './admin-energie/admin-energie.component';
import { AdminGenerateurComponent } from './admin-generateur/admin-generateur.component';
import { AdminPyloneComponent } from './admin-pylone/admin-pylone.component';
import { AdminRadioComponent } from './admin-radio/admin-radio.component';
import { AdminSiteComponent } from './admin-site/admin-site.component';
import { AdminTransComponent } from './admin-trans/admin-trans.component';
import { AjoutBatterieComponent } from './ajout-batterie/ajout-batterie.component';
import { AjoutEnergieComponent } from './ajout-energie/ajout-energie.component';
import { AjoutGenerateurComponent } from './ajout-generateur/ajout-generateur.component';
import { AjoutPyloneComponent } from './ajout-pylone/ajout-pylone.component';
import { AjoutRadioComponent } from './ajout-radio/ajout-radio.component';
import { AjoutSiteComponent } from './ajout-site/ajout-site.component';
import { AjoutTransComponent } from './ajout-trans/ajout-trans.component';

/**
 * const routes: Routes = [
  { path: 'update-batterie-page', component: UpdateBatterieComponent},
        { path: 'update-energie-page', component: UpdateEnergieComponent},
        { path: 'update-generateur-page', component: UpdateGenerateurComponent},
        { path: 'update-pylone-page', component: UpdatePyloneComponent},
        { path: 'update-radio-page', component: UpdateRadioComponent},
        { path: 'update-site-page', component: UpdateSiteComponent},
        { path: 'update-trans-page', component: UpdateTransComponent},
        { path: 'ajout-batterie-page', component: AjoutBatterieComponent},
        { path: 'ajout-energie-page', component: AjoutEnergieComponent},
        { path: 'ajout-generateur-page', component: AjoutGenerateurComponent},
        { path: 'ajout-pylone-page', component: AjoutPyloneComponent},
        { path: 'ajout-radio-page', component: AjoutRadioComponent},
        { path: 'ajout-site-page', component: AjoutSiteComponent},
        { path: 'ajout-trans-page', component: AjoutTransComponent},
        { path: 'admin-batterie-page', component: AdminBatterieComponent},
        { path: 'admin-energie-page', component: AdminEnergieComponent},
        { path: 'admin-generateur-page', component: AdminGenerateurComponent},
        { path: 'admin-pylone-page', component: AdminPyloneComponent},
        { path: 'admin-radio-page', component: AdminRadioComponent},
        { path: 'admin-trans-page', component: AdminTransComponent}
  
];
 * 
 */




@NgModule({
  declarations: [],
    
    
  imports: [],
  exports: []
})
export class AdministrationRoutingModule { }
