import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SiteListComponent } from './site-list/site-list.component';


const routes: Routes =[]
@NgModule({
  declarations: [
    
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstallationRoutingModule { }
