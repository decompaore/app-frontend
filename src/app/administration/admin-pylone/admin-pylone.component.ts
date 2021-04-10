import { Component, OnInit } from '@angular/core';
import { Pylone } from 'src/app/models/pylone';
import { PyloneService } from 'src/app/services/pylone.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-pylone',
  templateUrl: './admin-pylone.component.html',
  styleUrls: ['./admin-pylone.component.css']
})
export class AdminPyloneComponent implements OnInit {
  public pylone: Pylone;

  pylones;
  

  constructor(private pyloneService: PyloneService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.pyloneService.getPyloneList().subscribe(
      data  => {
        this.pylones= data
      }, error  =>{
        console.log(error);
      }
    );
  }
  deletePylone(id: number) {
    this.pyloneService.deletePylone(this.pylone)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updatePylone(id: number){
    this.router.navigate(['update-pylone', id]);
  }

}
