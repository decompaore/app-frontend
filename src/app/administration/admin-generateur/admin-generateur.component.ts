import { Component, OnInit } from '@angular/core';
import { Generateur } from 'src/app/models/generateur';
import { GenerateurService } from 'src/app/services/generateur.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-generateur',
  templateUrl: './admin-generateur.component.html',
  styleUrls: ['./admin-generateur.component.css']
})
export class AdminGenerateurComponent implements OnInit {

  public generateur: Generateur;
  generateurs

  constructor(private generateurService: GenerateurService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.generateurService.getGenerateurList().subscribe(
      data  => {
        this.generateurs = data
      }, error  =>{
        console.log(error);
      }
    );
  }
  deleteGenerateur(id: number) {
    this.generateurService.deleteGenerateur(this.generateur)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateGenerateur(id: number){
    this.router.navigate(['update-generateur', id]);
  }

}
