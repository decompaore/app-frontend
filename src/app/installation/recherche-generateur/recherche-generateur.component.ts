import { Component, OnInit } from '@angular/core';
import { Generateur } from 'src/app/models/generateur';
import { GenerateurService } from 'src/app/services/generateur.service';
import { Site } from 'src/app/models/site';
import { SiteService } from 'src/app/services/site.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recherche-generateur',
  templateUrl: './recherche-generateur.component.html',
  styleUrls: ['./recherche-generateur.component.css']
})
export class RechercheGenerateurComponent implements OnInit {

  public nom: string;
  public isFormSubmitted: boolean=false;
  public headsTab = ['Fabriquant', 'Kva','Cuve'];
  public isNoResult : boolean=true;
  public displayMessageModal: boolean = false;
  public messageModal: string;
  searchGenerateursResult;
  sites;
  submitted = false;
  searchGenerateurForm: NgForm;
  public site = new Site();
  public generateur = new Generateur();

  constructor(private generateurService: GenerateurService,
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
 * @param searchGenerateurForm 
 */
searchSiteGenerateur(searchGenerateurForm: NgForm){
  this.spinner.show();
  this.displayMessageModal = false;
  if(!searchGenerateurForm.valid){
    this.buildMessageModal('Veuillez saisir le nom du site');
  }
    this.generateurService.getSiteGenerateur(this.nom).subscribe(
      data  => {
        if(data && data !=null){
          console.log(data)
          this.searchGenerateursResult = data;
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
    this.isFormSubmitted = searchGenerateurForm.submitted;
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
