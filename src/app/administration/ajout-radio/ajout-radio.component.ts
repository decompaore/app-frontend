import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Radio } from 'src/app/models/radio';
import { RadioService } from 'src/app/services/radio.service';

@Component({
  selector: 'app-ajout-radio',
  templateUrl: './ajout-radio.component.html',
  styleUrls: ['./ajout-radio.component.css']
})
export class AjoutRadioComponent implements OnInit {

  radio: Radio = new Radio();
  submitted = false;

  constructor(private radioService: RadioService,
    private router: Router) { }

  ngOnInit(): void {
  }
  newRadio(): void {
    this.submitted = false;
    this.radio = new Radio();
  }
  saveRadio() {
    this.radioService.saveRadio(this.radio).subscribe(
      data  => {
        console.log(data)
        this.radio = new Radio();
        this.gotoList();
      },
      error  => console.log(error)
    );

  }
  onSubmit(){
    this.submitted = true;
    this.saveRadio();
  }
  gotoList(){
    this.router.navigate(['/radios']);
  }

}
