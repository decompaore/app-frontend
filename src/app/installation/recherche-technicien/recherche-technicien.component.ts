import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Site } from 'src/app/models/site';
import { SiteService } from 'src/app/services/site.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-recherche-technicien',
  templateUrl: './recherche-technicien.component.html',
  styleUrls: ['./recherche-technicien.component.css']
})



export class RechercheTechnicienComponent implements OnInit {

  public types = ['Base', 'Config', 'Constructeur', 'Capacite', 'Typetrans', 'Terrain'];
  public base: string;
  public config: string;
  public constructeur: string;
  public capacite: string;
  public type: string;
  public terrain: string;
  public displayType: string ='Base';
  public isFormSubmitted: boolean=false;
  public headsTab = ['Nom', 'Technologie','Typologie','Zem'];
  public isNoResult : boolean=true;
  public displayMessageModal: boolean = false;
  public messageModal: string;
  //public searchSitesResult: Site[] = [];
  searchSitesResult;
  public site = new Site();
  

  //sites: Observable<Site[]>;
  sites;

  constructor(private siteService: SiteService, private spinner: NgxSpinnerService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.siteService.getSiteList()
    .subscribe(
      data => {
        console.log(data)
        this.sites = data;
      }, error => console.log(error)
    );
  }
  /** 
   * @param searchSiteForm
   */
  searchSiteByFeature(searchSiteForm: NgForm){
    this.spinner.show();
    this.displayMessageModal = false;
    if(!searchSiteForm.valid){
      this.buildMessageModal('Il y a une erreur dans le formulaire');
    }
    if(this.displayType === 'Base'){
      //this.searchSitesResult = [];
      this.siteService.getSiteByStationBase(this.base).subscribe(
        result => {
          if(result && result !=null){
            console.log(result)
            this.searchSitesResult = result;
            //this.searchSitesResult.push(result);
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
    }
    else if(this.displayType === 'Config'){
      //this.searchSitesResult = [];
      this.siteService.getSiteByConfig(this.config).subscribe(
        result => {
          if(result && result !=null){
            console.log(result)
            this.searchSitesResult = result;
            //this.searchSitesResult.push(result);
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
  }
  else if(this.displayType === 'Constructeur'){
   // this.searchSitesResult = [];
    this.siteService.getSiteByTrans(this.constructeur).subscribe(
      result => {
        if(result && result !=null){
          console.log(result)
          this.searchSitesResult = result;
         // this.searchSitesResult.push(result);
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
    }
    else if(this.displayType === 'Typetrans'){
      //this.searchSitesResult = [];
      this.siteService.getSiteByTypeTrans(this.type).subscribe(
        result => {
          if(result && result !=null){
            console.log(result)
            this.searchSitesResult = result;
            //this.searchSitesResult.push(result);
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
   }

   else if(this.displayType === 'Capacite'){
    //this.searchSitesResult = [];
    this.siteService.getSiteByTransCap(this.capacite).subscribe(
      result => {
        if(result && result !=null){
          console.log(result)
          this.searchSitesResult = result;
          //this.searchSitesResult.push(result);
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
 }
 else if(this.displayType === 'Terrain'){
  //this.searchSitesResult = [];
  this.siteService.getSiteByTerrain(this.terrain).subscribe(
    result => {
      
      if(result && result !=null){
        console.log(result)
        this.searchSitesResult = result;
        //this.searchSitesResult.push(result);
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
}
   this.isFormSubmitted = searchSiteForm.submitted;
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
