import { Component, OnInit } from '@angular/core';
import { Energie } from 'src/app/models/energie';
import { EnergieService } from 'src/app/services/energie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-energie',
  templateUrl: './update-energie.component.html',
  styleUrls: ['./update-energie.component.css']
})
export class UpdateEnergieComponent implements OnInit {

  id: number;
  energie: Energie;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private energieService: EnergieService) { }

  ngOnInit(): void {
    this.energie = new Energie();
    this.submitted = false;
    this.id = this.route.snapshot.params['id'];
    this.energieService.getEnergie(this.id).subscribe(
      data => {
        console.log(data);
        this.energie = data;
      },
      error => console.log(error)
    );
  }
  updateEnergie() {
    this.energieService.updateEnergie(this.id, this.energie).subscribe(
      data => {
        console.log(data);
        this.energie = new Energie();
        this.gotoList();
      },
      error => console.log(error)
    );
  }
  onSubmit(){
    this.updateEnergie();
    this.submitted = true;
  }
  gotoList(){
    this.router.navigate(['/energies']);
  }

}
