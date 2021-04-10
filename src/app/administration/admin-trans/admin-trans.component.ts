import { Component, OnInit } from '@angular/core';
import { Trans } from 'src/app/models/trans';
import { TransService } from 'src/app/services/trans.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-trans',
  templateUrl: './admin-trans.component.html',
  styleUrls: ['./admin-trans.component.css']
})
export class AdminTransComponent implements OnInit {

  transes;
  public trans: Trans;

  constructor(private transService: TransService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.transService.getTransList().subscribe(
      data  => {
        this.transes= data
      }, error  =>{
        console.log(error);
      }
    );
  }
  deleteTrans(id: number) {
    this.transService.deleteTrans(this.trans)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateTrans(id: number){
    this.router.navigate(['update-trans', id]);
  }

}
