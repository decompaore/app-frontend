import { Component, OnInit,ViewChild, ElementRef} from '@angular/core';
import * as jsPDF from 'jspdf';
import { from, Observable } from 'rxjs';
import { SiteService } from 'src/app/services/site.service';
import { Site } from 'src/app/models/site';
import { PdfService } from 'src/app/services/pdf.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css']
})
export class SiteListComponent implements OnInit {

  public types = ['Nom', 'Typologie', 'Technologie', 'Zem'];
  public nom : string;
  public typologie : string;
  public technologie : string;
  public zem : string;
  public displayType: string ='Nom';
  public isFormSubmitted: boolean=false;
  public headsTab = ['NOM', 'TYPOLOGIE', 'TECHNOLOGIE', 'ZEM'];
  public isNoResult : boolean=true;
  public displayMessageModal: boolean = false;
  public messageModal: string;
 searchSitesResult;
  public site: Site;

  public sites;

  
  constructor(private siteService: SiteService, private router: Router,
     private spinner: NgxSpinnerService, private pdfService: PdfService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  generatePdf(){
    this.pdfService.generatePdf();
  }
  reloadData() {
    this.siteService.getSiteList().subscribe(
      data => {
        console.log(data);
        this.sites = data;
      }, error => console.log(error)
    );
  }
/**
 * 
 * @param searchSiteForm 
 */
  searchSiteByType(searchSiteForm: NgForm) {
    this.spinner.show();
    this.displayMessageModal = false;
    if(!searchSiteForm.valid){
      this.buildMessageModal('Il y a une erreur dans le formulaire');
    }
    if(this.displayType === 'Nom'){
      this.searchSitesResult = [];
      this.siteService.getSiteByNom(this.nom).subscribe(
        result => {
          if(result && result !=null){
            this.searchSitesResult.push(result);
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
    else if(this.displayType === 'Typologie'){
      //this.searchSitesResult = [];
      this.siteService.getSiteByTypo(this.typologie).subscribe(
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
  else if(this.displayType === 'Technologie'){
    //this.searchSitesResult = [];
    this.siteService.getSiteByTech(this.technologie).subscribe(
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
    else if(this.displayType === 'Zem'){
      //this.searchSitesResult = [];
      this.siteService.getSiteByZem(this.zem).subscribe(
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
