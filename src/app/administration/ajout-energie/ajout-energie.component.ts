import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Energie } from 'src/app/models/energie';
import { EnergieService } from 'src/app/services/energie.service';

@Component({
  selector: 'app-ajout-energie',
  templateUrl: './ajout-energie.component.html',
  styleUrls: ['./ajout-energie.component.css']
})
export class AjoutEnergieComponent implements OnInit {

  energie: Energie = new Energie();
  submitted = false;

  constructor(private energieService: EnergieService,
    private router: Router) { }

  ngOnInit(): void {
  }
  newEnergie(): void {
    this.submitted = false;
    this.energie = new Energie();
  }
  saveEnergie() {
    this.energieService.saveEnergie(this.energie).subscribe(
      data  => {
        console.log(data)
        this.energie = new Energie();
        this.gotoList();
      },
      error  => console.log(error)
    );
  }
  onSubmit(){
    this.submitted = true;
    this.saveEnergie();
  }
  gotoList() {
    this.router.navigate(['/energies']);
  }

}
