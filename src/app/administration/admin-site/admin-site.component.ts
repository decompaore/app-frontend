import { Component, OnInit } from '@angular/core';
//import { UdapteSiteComponent } from '../update-site/update-site.component';

import { Site } from 'src/app/models/site';
import { SiteService } from 'src/app/services/site.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-site',
  templateUrl: './admin-site.component.html',
  styleUrls: ['./admin-site.component.css']
})
export class AdminSiteComponent implements OnInit {

  sites;
  
  site: Site= new Site();

  constructor(private siteService: SiteService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.siteService.getSiteList()
    .subscribe(
      data  => {
        this.sites = data
      }, error  =>{
        console.log(error);
      }
    );
  }
  deleteSite(id: number) {
    this.siteService.deleteSite(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateSite(id: number){
    this.router.navigate(['update-site-page', id]);
  }

}
