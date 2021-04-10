import { Component, OnInit } from '@angular/core';
import { Batterie } from 'src/app/models/batterie';
import { BatterieService } from 'src/app/services/batterie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-batterie',
  templateUrl: './update-batterie.component.html',
  styleUrls: ['./update-batterie.component.css']
})
export class UpdateBatterieComponent implements OnInit {

  id: number;
  batterie: Batterie;
  submitted = false;
  
  constructor(private batterieService: BatterieService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.batterie = new Batterie();
    this.submitted = false;
    this.id = this.route.snapshot.params['id'];
    this.batterieService.getBatterie(this.id).subscribe(
      data => {
        console.log(data)
        this.batterie = data;
      }, error => console.log(error)
    );
  }
  updateBatterie() {
    this.batterieService.updateBatterie(this.id, this.batterie).subscribe(
      data => {
        console.log(data);
        this.batterie = new Batterie();
        this.gotoList();


      }, error => console.log(error)

    );
  }
  onSubmit(){
    this.updateBatterie();
    this.submitted = true;
  }
  gotoList(){
    this.router.navigate(['/update-batterie-page']);
  }

}
