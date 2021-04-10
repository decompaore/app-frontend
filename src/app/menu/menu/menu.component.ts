import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  title = 'Telecel-Faso RAN Installation';

  constructor(private router: Router,
    private activaterRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  gotoAdministrationPage(){
    this.router.navigateByUrl('/administration-page');
  }
  gotoTechnicienPage(){
    this.router.navigateByUrl('/technicien-page');
  }
  gotoUsagerPage(){
    this.router.navigateByUrl('/usager-page');
  }


}
