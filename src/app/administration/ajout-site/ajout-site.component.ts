import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Batterie } from 'src/app/models/batterie';
import { Energie } from 'src/app/models/energie';
import { Pylone } from 'src/app/models/pylone';
import { Radio } from 'src/app/models/radio';
import { Site } from 'src/app/models/site';
import { Trans } from 'src/app/models/trans';
import { SiteService } from 'src/app/services/site.service';
import { BatterieService } from 'src/app/services/batterie.service';
import { EnergieService } from 'src/app/services/energie.service';
import { PyloneService } from 'src/app/services/pylone.service';
import { RadioService } from 'src/app/services/radio.service';
import { TransService } from 'src/app/services/trans.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-ajout-site',
  templateUrl: './ajout-site.component.html',
  styleUrls: ['./ajout-site.component.css']
})
export class AjoutSiteComponent implements OnInit {

  //public batteries: Batterie[] = [{id: null, type:"", marque:"", nombre: null}];
  batteries;
  //public energies: Energie[] = [{id:null, type:"", primaire:"", secondaire:"", puissance:""}];
  energies;
  //public pylones: Pylone[] = [{id:null, type:"", terrain:"", hauteur:""}];
  pylones;
 // public radios: Radio[] =[{id:null, base:"", config:""}];
 radios;
 // public transes: Trans[] =[{id:null, type:"", capacite:"", constructeur:""}];
 public actionButton: string = 'Save';
 public messageModal: string;
public displayMessageModal: boolean = false;
public titleSave: string = 'Formulaire ajouter un site';
public nom: string;
public typologie: string;
public technologie: string;
public zem: string;
public latitude: number;
//public longitude: number;
public longitude: number;
public batterieId: number;
public energieId: number;
public pyloneId: number;
public radioId: number;
public transId: number;



 transes;
  sites: Site;
  site: Site = new Site();
  batterie: Batterie;



  submitted =false;
  id: number;

  constructor(private siteService: SiteService, private batterieService: BatterieService,
    private energieService: EnergieService, private pyloneService: PyloneService,
    private radioService: RadioService, private transService: TransService,
    private router: Router, private route: ActivatedRoute, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.site = new Site();
    this.id = this.route.snapshot.params['id'];
    /**
     * this.reloadBatterie();
this.reloadEnergie();
this.reloadPylone();
this.reloadRadio();
this.reloadTrans();
     */



  }
  newSite(): void {
    this.submitted = false;
    this.site = new Site();
  }
  /**
   *  reloadBatterie(){
    this.batterieService.getBatterieList().subscribe(
      data => {
        console.log(data)
        this.batteries = data;
      }, error => console.log(error)
    )
  }
  reloadEnergie(){
    this.energieService.getEnergieList().subscribe(
      data => {
        console.log(data)
        this.energies = data;
      }, error => console.log(error)
    );
  }
  reloadPylone(){
    this.pyloneService.getPyloneList().subscribe(
      data => {
        console.log(data)
        this.pylones = data;
      }, error => console.log(error)
    );
  }
  reloadRadio(){
    this.radioService.getRadioList().subscribe(
      data => {
        console.log(data)
        this.radios = data;
      }, error => console.log(error)
    );
  }
  reloadTrans(){
    this.transService.getTransList().subscribe(
      data => {
        console.log(data)
        this.transes = data;
      }, error => console.log(error)
    );
  }
   */
 
  /**
   * Ajouter un site
   * @param site
   */
  addSite(){
    this.siteService.saveSite(this.site).subscribe(
     data=> {
         console.log(data)
         this.site = new Site();
         //this.spinner.hide();
         this.buildMessageModal('Le site a été ajouté avec succès');
       
        this.gotoList();
      },
      error => {
        this.spinner.hide();
        this.buildMessageModal('Une erreur est survenue veuillez reprendre');
      }
    );

  }
  /**
  * Erase all data from this NgForm.
  * @param addSitekForm
  */
 clearForm(addSiteForm: NgForm){
  addSiteForm.form.reset(); 
  this.displayMessageModal = false;
}
/**
   * Construit le message à afficher suite à une action utilisateur.
   * @param msg 
   */
  buildMessageModal(msg: string){
    this.messageModal = msg;
    this.displayMessageModal = true;
}
  
  onSubmit() {
    this.submitted = true;
    this.addSite();
  }
  gotoList() {
    this.router.navigate(['/admin-site-page']);
  }

}
