import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BatterieService } from 'src/app/services/batterie.service';
import { Batterie } from 'src/app/models/batterie';
import { Router } from '@angular/router';
import { Site } from 'src/app/models/site';

@Component({
  selector: 'app-admin-batterie',
  templateUrl: './admin-batterie.component.html',
  styleUrls: ['./admin-batterie.component.css']
})
export class AdminBatterieComponent implements OnInit {

  public batterie: Batterie;

  batteries;

  constructor(private batterieService: BatterieService,
    private router: Router) { }

  ngOnInit() {

    this.reloadData();
  }
  reloadData(){
    this.batterieService.getBatterieList()
    .subscribe(
      data  => {
        this.batteries = data
      }, error  =>{
        console.log(error);
      }
    );
  }
  deleteBatterie(batterie: Batterie){
    this.batterieService.deleteBatterie(batterie).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error() )
    );
  }
  updateBatterie(batterie: Batterie){
    this.router.navigate(['/update-batterie'])

  }

}
