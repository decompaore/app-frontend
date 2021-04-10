import { Component, OnInit } from '@angular/core';
import { Energie } from 'src/app/models/energie';
import { EnergieService } from 'src/app/services/energie.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Batterie } from 'src/app/models/batterie';

@Component({
  selector: 'app-admin-energie',
  templateUrl: './admin-energie.component.html',
  styleUrls: ['./admin-energie.component.css']
})
export class AdminEnergieComponent implements OnInit {

  public energie: Energie;
  energies;

  constructor(private energieService: EnergieService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.energieService.getEnergieList().subscribe(
       data  => {
        this.energies = data
      }, error  =>{
        console.log(error);
      }
    );
  }
  deleteEnergie(id: number) {
    this.energieService.deleteEnergie(this.energie)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateEnergie(id: number){
    this.router.navigate(['update-energie', id]);
  }

}
