import { Component, OnInit } from '@angular/core';
import { Radio } from 'src/app/models/radio';
import { RadioService } from 'src/app/services/radio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pylone } from 'src/app/models/pylone';


@Component({
  selector: 'app-update-radio',
  templateUrl: './update-radio.component.html',
  styleUrls: ['./update-radio.component.css']
})
export class UpdateRadioComponent implements OnInit {

  id: number;
  radio: Radio;
  submitted=false;

  constructor(private radioService: RadioService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.radio = new Radio();
    this.submitted = false;
    this.id =this.route.snapshot.params['id'];
    this.radioService.getRadio(this.id).subscribe(
      data => {
        console.log(data)
        this.radio = data;
      },
      error => console.log(error)
    );
  }
  updateRadio() {
    this.radioService.updateRadio(this.id, this.radio)
      .subscribe(data => {
        console.log(data);
        this.radio = new Radio();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateRadio();  
    this.submitted = true;  
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

}
