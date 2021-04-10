import { Component, OnInit } from '@angular/core';
import { Generateur } from 'src/app/models/generateur';
import { Site } from 'src/app/models/site';
import { GenerateurService } from 'src/app/services/generateur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-update-generateur',
  templateUrl: './update-generateur.component.html',
  styleUrls: ['./update-generateur.component.css']
})
export class UpdateGenerateurComponent implements OnInit {
  public sites: Site[]= [{id: null, nom:"", typologie:"", technologie:"", zem:"", latitude: null, longitude:null,
  batterie:null,energie:null, pylone:null, radio:null, trans:null}];
  id: number;
  generateur: Generateur;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private generateurService: GenerateurService) { }

  ngOnInit(): void {
    this.generateur = new Generateur();
    this.submitted = false;
    this.id = this.route.snapshot.params['id'];
    this.generateurService.getGenerateur(this.id).subscribe(
      data =>{
        console.log(data);
        this.generateur = data;
      },
      error => console.log(error)
    );

  }
  updateGenerateur(){
    this.generateurService.updateGenerateur(this.id, this.generateur).subscribe(
      data => {
        console.log(data);
        this.generateur = new Generateur();
        this.gotoList();
      },
       error => console.log(error)
    );
  }
  onSubmit(){
    this.updateGenerateur();
    this.submitted = true;
  }
  gotoList(){
    this.router.navigate(['/generateurs']);
  }

}
