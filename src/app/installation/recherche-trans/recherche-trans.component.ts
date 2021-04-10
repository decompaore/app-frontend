import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Trans } from 'src/app/models/trans';
import { TransService } from 'src/app/services/trans.service';
import { Site } from 'src/app/models/site';
import { SiteService } from 'src/app/services/site.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {Router } from '@angular/router';
import { NgForm } from '@angular/forms';

 
@Component({
  selector: 'app-recherche-trans', 
  templateUrl: './recherche-trans.component.html',
  styleUrls: ['./recherche-trans.component.css']
})
export class RechercheTransComponent implements OnInit {

  public nom: string;
  public isFormSubmitted: boolean=false;
  public headsTab = ['Type', 'Capcite','Constructeur'];
  public isNoResult : boolean=true;
  public displayMessageModal: boolean = false;
  public messageModal: string;
  searchTransResult: any[];
  
  sites;
  public site = new Site();
  public trans = new Trans();
  searchTransForm;
  submitted = false;

  constructor(private transService: TransService,
    private siteService: SiteService, private router: Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.siteService.getSiteList().subscribe(
      data =>{
        console.log(data)
        this.sites = data;
      },
      error => console.log(error)
    );

  }
  
  /**
 * 
 * @param searchTransForm 
 */
searchSiteTrans(searchTransForm: NgForm){
  this.spinner.show();
  this.displayMessageModal = false;
  if(!searchTransForm.valid){
    this.buildMessageModal('Veuillez saisir le nom du site');
  }
    this.transService.getSiteTrans(this.nom).subscribe(
      data  => {
        if(data && data !=null){
          console.log(data)
          this.searchTransResult = data;
          this.searchTransResult = Array.of(this.searchTransResult)
          this.isNoResult = false;
            this.spinner.hide();
            return;
        }
        this.isNoResult = true;
        this.spinner.hide();
        
        },
        error => {
          this.spinner.hide();
          this.buildMessageModal('Une erreur est survenue lors de la recherche');
      }
    );
    this.isFormSubmitted = searchTransForm.submitted;
  }

  /**
   * onSubmit(){
 // this.updateSite(this.site);
 this.searchSiteTrans(this.searchTransForm)
  this.submitted = true;}

   */

 /**
   * Construit le message à afficher suite à une action utilisateur.
   * @param msg 
   */
  buildMessageModal(msg: string){
    this.messageModal = msg;
    this.displayMessageModal = true;
}

}
