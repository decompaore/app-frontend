import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Batterie } from 'src/app/models/batterie';
import { BatterieService } from 'src/app/services/batterie.service';

@Component({
  selector: 'app-ajout-batterie',
  templateUrl: './ajout-batterie.component.html',
  styleUrls: ['./ajout-batterie.component.css']
})
export class AjoutBatterieComponent implements OnInit {

  batterie: Batterie= new Batterie();
  submitted = false;

  constructor(private batterieService: BatterieService,
    private router: Router) { }

  ngOnInit(): void {
  }
  newBatterie(): void {
    this.batterie = new Batterie();
    this.submitted = false;
  }
  saveBatterie() {
    this.batterieService.saveBatterie(this.batterie).subscribe(
      data => {
        console.log(data)
        this.batterie = new Batterie();
        this.gotoList();
      },
      error => console.log(error)
    );
  }
  onSubmit(){
    this.submitted =true;
    this.saveBatterie();
  }
  gotoList() {
    this.router.navigate(['/ajout-batterie-page']);
  }

}
