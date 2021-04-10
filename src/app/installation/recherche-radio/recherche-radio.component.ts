import { Component, OnInit } from '@angular/core';
import { Radio } from 'src/app/models/radio';
import { RadioService } from 'src/app/services/radio.service';
import { Site } from 'src/app/models/site';
import { SiteService } from 'src/app/services/site.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-recherche-radio',
  templateUrl: './recherche-radio.component.html',
  styleUrls: ['./recherche-radio.component.css']
})
export class RechercheRadioComponent implements OnInit {

  public types =['Nom'];
  public nom: string;
  public displayType: string ='Nom';
  public isFormSubmitted: boolean=false;
  public headsTab = ['Base', 'Config'];
  public isNoResult : boolean=true;
  public displayMessageModal: boolean = false;
  public messageModal: string;
  searchRadiosResult: any[];
  sites;
  public site = new Site();
  public radios;
  submitted = false;
  searchRadioForm : NgForm;


  constructor(private radioService: RadioService,
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
 * @param searchRadioForm 
 */
searchSiteRadio(searchRadioForm: NgForm){
  this.spinner.show();
  this.displayMessageModal = false;
  if(!searchRadioForm.valid){
    this.buildMessageModal('Veuillez saisir le nom du site');
  }
    this.radioService.getSiteRadio(this.nom).subscribe(
      data  => {
        if(data && data !=null){
          console.log(data)
          this.searchRadiosResult = data;
          this.searchRadiosResult = Array.of(this.searchRadiosResult)
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
    this.isFormSubmitted = searchRadioForm.submitted;
  }
  
 /**
   * Construit le message à afficher suite à une action utilisateur.
   * @param msg 
   */
  buildMessageModal(msg: string){
    this.messageModal = msg;
    this.displayMessageModal = true;
}

}
