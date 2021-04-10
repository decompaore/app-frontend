import { Component, OnInit } from '@angular/core'; 
import { from } from 'rxjs';
import { Pylone } from 'src/app/models/pylone';
import { PyloneService } from 'src/app/services/pylone.service';
import { SiteService } from 'src/app/services/site.service';
import { Site } from 'src/app/models/site';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recherche-pylone',
  templateUrl: './recherche-pylone.component.html',
  styleUrls: ['./recherche-pylone.component.css']
})
export class RecherchePyloneComponent implements OnInit {

  public types =['Nom'];
  public nom: string;
  public displayType: string ='Nom';
  public isFormSubmitted: boolean=false;
  public headsTab = ['Type', 'Terrain','Hauteur'];
  public isNoResult : boolean=true;
  public displayMessageModal: boolean = false;
  public messageModal: string;
  searchPylonesResult: any[];
  sites;
  searchPyloneForm: NgForm;
  submitted = false;
  public site: Site;
  //public pylone = new Pylone();

  constructor(private pyloneService: PyloneService,
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
 * @param searchPyloneForm 
 */
searchSitePylone(searchPyloneForm: NgForm){
  this.spinner.show();
  this.displayMessageModal = false;
  if(!searchPyloneForm.valid){
    this.buildMessageModal('Veuillez saisir le nom du site');
  }
  
    this.pyloneService.getSitePylone(this.nom).subscribe(
      data  => {
        if(data && data !=null){
          console.log(data)
          this.searchPylonesResult = data;
          this.searchPylonesResult = Array.of(this.searchPylonesResult);
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
    this.isFormSubmitted = searchPyloneForm.submitted;
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
