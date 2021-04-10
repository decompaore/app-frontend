import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trans } from 'src/app/models/trans';
import { TransService } from  'src/app/services/trans.service';

@Component({
  selector: 'app-ajout-trans',
  templateUrl: './ajout-trans.component.html',
  styleUrls: ['./ajout-trans.component.css']
})
export class AjoutTransComponent implements OnInit {

  trans: Trans = new Trans();
  submitted = false;

  constructor(private transService: TransService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newTrans(): void {
    this.submitted = false;
    this.trans = new Trans();
  }
  saveTrans() {
    this.transService.saveTrans(this.trans).subscribe(
      data => {
        console.log(data)
        this.trans = new Trans();
        this.gotoList();
      },
      error => console.log(error)
      
    );
  }
  onSubmit() {
    this.submitted = true;
    this.saveTrans();   
  }
  gotoList(){
    this.router.navigate(['/transes']);
  }


}
