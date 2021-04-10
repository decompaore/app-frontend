import { Component, OnInit } from '@angular/core';
import { Site } from 'src/app/models/site';
import { SiteService } from 'src/app/services/site.service';
import { BatterieService } from 'src/app/services/batterie.service';
import { EnergieService } from 'src/app/services/energie.service';
import { PyloneService } from 'src/app/services/pylone.service';
import { RadioService } from 'src/app/services/radio.service';
import { TransService } from 'src/app/services/trans.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Batterie } from 'src/app/models/batterie';
import { Energie } from 'src/app/models/energie';
import { Pylone } from 'src/app/models/pylone';
import { Radio } from 'src/app/models/radio';
import { Trans } from 'src/app/models/trans';
import { from } from 'rxjs';


@Component({
  selector: 'app-update-site',
  templateUrl: './update-site.component.html',
  styleUrls: ['./update-site.component.css']
})
export class UpdateSiteComponent implements OnInit {

  //public batteries: Batterie[] = [{id: null, type:"", marque:"", nombre: null}];
   batteries;
  //public energies: Energie[] = [{id:null, type:"", primaire:"", secondaire:"", puissance:""}];
  energies;
  //public pylones: Pylone[] = [{id:null, type:"", terrain:"", hauteur:""}];
  pylones;
  //public radios: Radio[] =[{id:null, base:"", config:""}];
  radios;
  //public transes: Trans[] =[{id:null, type:"", capacite:"", constructeur:""}];
  transes;
  sites;

  id: number;
  site: Site;
  submitted= false;

  constructor(private route: ActivatedRoute, private router: Router,
    private siteService: SiteService, private batterieService: BatterieService,
    private energieService: EnergieService, private pyloneService: PyloneService,
    private radioService: RadioService, private transServie: TransService) { }

  ngOnInit(): void {
    this.site = new Site();
    this.submitted = false;
    this.id = this.route.snapshot.params['id'];
  
    this.reloadData();
    this.loadBatterie();
    this.loadEnergie();
    this.loadPylone();
    this.loadRadio();
    this.loadTrans();

  }
  reloadData(){
    this.siteService.getSite(this.id).subscribe(
      data =>{
        console.log(data)
        this.sites = data;
      },
      error => console.log(error)
    );

  }
  updateSite(site: Site){
    this.siteService.updateSite( this.site).subscribe(
      data => {
        console.log(data);
        this.site = new Site();
        this.gotoList();
      },
       error => console.log(error)
    );
    
  }
  loadBatterie(){
    this.batterieService.getBatterieList()
    .subscribe(
      data  => {
        console.log(data)
        this.batteries = data;
      }, error  =>{
        console.log(error);
      }
    );
  }
  loadEnergie(){
    this.energieService.getEnergieList()
    .subscribe(
      data  => {
        console.log(data)
        this.energies = data;
      }, error  =>{
        console.log(error);
      }

    );
  }
  loadPylone(){
    this.pyloneService.getPyloneList()
    .subscribe(
      data  => {
        console.log(data)
        this.pylones = data;
      }, error  =>{
        console.log(error);
      }
    );
  }
  loadRadio(){
    this.radioService.getRadioList()
    .subscribe(
      data  => {
        console.log(data)
        this.radios = data;
      }, error  =>{
        console.log(error);
      }
    );
  }
  loadTrans(){
    this.transServie.getTransList()
    .subscribe(
      data  => {
        console.log(data)
        this.transes = data;
      }, error  =>{
        console.log(error);
      }
    )
  }
  onSubmit(){
    this.updateSite(this.site);
    this.submitted = true;
  }
  gotoList(){
    this.router.navigate(['/admin-site-page']);
  }

}
