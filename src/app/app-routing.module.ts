import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { SiteListComponent } from './installation/site-list/site-list.component';
import { RechercheTechnicienComponent } from './installation/recherche-technicien/recherche-technicien.component';
import { AjoutBatterieComponent } from './administration/ajout-batterie/ajout-batterie.component';
import { AjoutEnergieComponent } from './administration/ajout-energie/ajout-energie.component';
import { AjoutGenerateurComponent } from './administration/ajout-generateur/ajout-generateur.component';
import { AjoutPyloneComponent } from './administration/ajout-pylone/ajout-pylone.component';
import { AjoutRadioComponent } from './administration/ajout-radio/ajout-radio.component';
import { AjoutSiteComponent } from './administration/ajout-site/ajout-site.component';
import { AjoutTransComponent } from './administration/ajout-trans/ajout-trans.component';
import { AdminBatterieComponent } from './administration/admin-batterie/admin-batterie.component';
import { AdminEnergieComponent } from './administration/admin-energie/admin-energie.component';
import { AdminGenerateurComponent } from './administration/admin-generateur/admin-generateur.component';
import { AdminPyloneComponent } from './administration/admin-pylone/admin-pylone.component';
import { AdminRadioComponent } from './administration/admin-radio/admin-radio.component';
import { AdminSiteComponent } from './administration/admin-site/admin-site.component';
import { AdminTransComponent } from './administration/admin-trans/admin-trans.component';
import { UpdateBatterieComponent } from './administration/update-batterie/update-batterie.component';
import { UpdateEnergieComponent } from './administration/update-energie/update-energie.component';
import { UpdateGenerateurComponent } from './administration/update-generateur/update-generateur.component';
import { UpdatePyloneComponent } from './administration/update-pylone/update-pylone.component';
import { UpdateRadioComponent } from './administration/update-radio/update-radio.component';
import { UpdateSiteComponent } from './administration/update-site/update-site.component';
import { UpdateTransComponent } from './administration/update-trans/update-trans.component';
import { MenuComponent } from './menu/menu/menu.component';
import { RechercheSiteComponent } from './installation/recherche-site/recherche-site.component';
import { RechercheBatterieComponent } from './installation/recherche-batterie/recherche-batterie.component';
import { RechercheEnergieComponent } from './installation/recherche-energie/recherche-energie.component';
import { RechercheGenerateurComponent } from './installation/recherche-generateur/recherche-generateur.component';
import { RecherchePyloneComponent } from './installation/recherche-pylone/recherche-pylone.component';
import { RechercheRadioComponent } from './installation/recherche-radio/recherche-radio.component';
import { RechercheTransComponent } from './installation/recherche-trans/recherche-trans.component';

const routes: Routes = [
  { path: '', component: MenuComponent},
  { path: 'administration-page', component: AdminSiteComponent},
  { path: 'technicien-page', component: RechercheTechnicienComponent},
  { path: 'usager-page', component: SiteListComponent},
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
  { path: 'admin-site-page', component: AdminSiteComponent},
  { path: 'admin-trans-page', component: AdminTransComponent},
  {path: 'recherche-site-page', component: RechercheSiteComponent},
  {path: 'recherche-batterie-page', component: RechercheBatterieComponent},
  {path: 'recherche-energie-page', component: RechercheEnergieComponent},
  {path: 'recherche-generateur-page', component: RechercheGenerateurComponent},
  {path: 'recherche-pylone-page', component: RecherchePyloneComponent},
  {path: 'recherche-radio-page', component: RechercheRadioComponent},
  {path: 'recherche-trans-page', component: RechercheTransComponent},
  {path: 'site-list-page', component: SiteListComponent}
  
/**
 * {
    path: 'administration', children:[
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

    ]
  },
  {path: 'installation', children: [

  ]}
  
 *  */  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
