import { Component, OnInit } from '@angular/core';
import { Radio } from 'src/app/models/radio';
import { RadioService } from 'src/app/services/radio.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-radio',
  templateUrl: './admin-radio.component.html',
  styleUrls: ['./admin-radio.component.css']
})
export class AdminRadioComponent implements OnInit {

  radios;
  public radio: Radio;

  constructor(private radioService: RadioService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.radioService.getRadioList().subscribe(
      data  => {
        this.radios= data
      }, error  =>{
        console.log(error);
      }
    );
  }
  deleteRadio(id: number) {
    this.radioService.deleteRadio(this.radio)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateRadio(id: number){
    this.router.navigate(['update-radio', id]);
  }

}
