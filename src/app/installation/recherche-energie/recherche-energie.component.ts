import { Component, OnInit } from '@angular/core';
import { Energie } from 'src/app/models/energie';
import { EnergieService } from 'src/app/services/energie.service';
import { Site } from 'src/app/models/site';
import { SiteService } from 'src/app/services/site.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recherche-energie',
  templateUrl: './recherche-energie.component.html',
  styleUrls: ['./recherche-energie.component.css']
})
export class RechercheEnergieComponent implements OnInit {

  public types =['Nom'];
  public nom: string;
  public displayType: string ='Nom';
  public isFormSubmitted: boolean=false;
  public headsTab = ['Type', 'Primaire','Secondaire', 'Puissance'];
  public isNoResult : boolean=true;
  public displayMessageModal: boolean = false;
  public messageModal: string;
  searchEnergiesResult;
  sites;
  submitted = false;
  searchEnergieForm: NgForm;
  public site = new Site();
  public Energie = new Energie();

  constructor(private energieService: EnergieService, private siteService: SiteService,
    private router: Router, private spinner: NgxSpinnerService) { }

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
 * @param searchEnergieForm 
 */
searchSiteEnergie(searchEnergieForm){
  this.spinner.show();
  this.displayMessageModal = false;
  if(!searchEnergieForm.valid){
    this.buildMessageModal('Veuillez saisir le nom du site');
  }
    this.energieService.getSiteEnergie(this.nom).subscribe(
      data  => {
        if(data && data !=null){
          console.log(data)
          this.searchEnergiesResult = data;
          this.searchEnergiesResult = Array.of(this.searchEnergiesResult);
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
    this.isFormSubmitted = searchEnergieForm.submitted;
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
