import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Generateur } from 'src/app/models/generateur';
import { Site } from 'src/app/models/site';
import { GenerateurService } from 'src/app/services/generateur.service';

@Component({
  selector: 'app-ajout-generateur',
  templateUrl: './ajout-generateur.component.html',
  styleUrls: ['./ajout-generateur.component.css']
})
export class AjoutGenerateurComponent implements OnInit {
  public sites: Site[]= [{id: null, nom:"", typologie:"", technologie:"", zem:"", latitude: null, longitude:null,
  batterie:null,energie:null, pylone:null, radio:null, trans:null}];
  generateur: Generateur = new Generateur();
  submitted = false;

  constructor(private generateurService: GenerateurService,
    private router: Router) { }

  ngOnInit(): void {
  }
  newGenerateur(): void {
    this.submitted = false;
    this.generateur = new Generateur();
  }
  saveGenerateur() {
    this.generateurService.saveGenerateur(this.generateur).subscribe(
      data => {
        console.log(data)
        this.generateur = new Generateur();
        this.gotoList();
      },
      error => console.log(error)
    );
  }
  onSubmit(){
    this.submitted = true;
    this.saveGenerateur();
  }
  gotoList() {
    this.router.navigate(['/generateurs']);
  }

}
