import { Component, OnInit } from '@angular/core';
import { Batterie } from 'src/app/models/batterie';
import { BatterieService } from 'src/app/services/batterie.service';
import { Site } from 'src/app/models/site';
import { SiteService } from 'src/app/services/site.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-recherche-batterie',
  templateUrl: './recherche-batterie.component.html',
  styleUrls: ['./recherche-batterie.component.css']
})
export class RechercheBatterieComponent implements OnInit {

  public types =['Nom'];
  public nom: string;
  public displayType: string ='Base';
  public isFormSubmitted: boolean=false;
  public headsTab = ['Type', 'Marque','Nombre'];
  public isNoResult : boolean=true;
  public displayMessageModal: boolean = false;
  public messageModal: string;
  searchBatteriesResult;
  sites;
  submitted = false;
  searchBatterieForm : NgForm;
  public site = new Site();
  public batterie = new Batterie();
  

  //sites: Observable<Site[]>;
  

  constructor(private batterieService: BatterieService,
    private router: Router, private spinner: NgxSpinnerService, 
    private siteService: SiteService) { }

  ngOnInit(): void {
    this.reloadData()
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
 * @param searchBatterieForm 
 */
searchSiteBatterie(searchBatterieForm){
  this.spinner.show();
  this.displayMessageModal = false;
  if(!searchBatterieForm.valid){
    this.buildMessageModal('Veuillez selectionner le nom du site');
  }
    this.batterieService.getSiteBatterie(this.nom).subscribe(
      data  => {
        if(data && data !=null){
          console.log(data)
          this.searchBatteriesResult = data;
          this.searchBatteriesResult = Array.of(this.searchBatteriesResult);
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
    this.isFormSubmitted = searchBatterieForm.submitted;
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
