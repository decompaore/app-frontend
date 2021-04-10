import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pylone } from 'src/app/models/pylone';
import { PyloneService } from 'src/app/services/pylone.service';

@Component({
  selector: 'app-ajout-pylone',
  templateUrl: './ajout-pylone.component.html',
  styleUrls: ['./ajout-pylone.component.css']
})
export class AjoutPyloneComponent implements OnInit {

  pylone: Pylone = new Pylone();
  submitted = false;

  constructor(private pyloneService: PyloneService,
    private router: Router) { }

  ngOnInit(): void {
  }
  newPylone(): void {
    this.submitted = false;
    this.pylone = new Pylone();

  }
  savePylone(){
    this.pyloneService.savePylone(this.pylone).subscribe(
      data => {
        console.log(data)
        this.pylone = new Pylone();
        this.gotoList();


      },
      error => console.log(error)
    );
  }
  onSubmit() {
    this.submitted =true;
    this.savePylone();
  }
  gotoList(){
    this.router.navigate(['/pylones']);
  }

}
