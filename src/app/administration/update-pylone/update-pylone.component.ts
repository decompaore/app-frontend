import { Component, OnInit } from '@angular/core';
import { Pylone } from 'src/app/models/pylone';
import { PyloneService } from 'src/app/services/pylone.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-pylone',
  templateUrl: './update-pylone.component.html',
  styleUrls: ['./update-pylone.component.css']
})
export class UpdatePyloneComponent implements OnInit {

  id: number;
  pylone: Pylone;
  submitted = false;

  constructor(private pyloneService: PyloneService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.pylone = new Pylone();
    this.submitted = false;
    this.id= this.route.snapshot.params['id'];
    this.pyloneService.getPylone(this.id).subscribe(
      data =>{
        console.log(data);
        this.pylone = data;

      },
      error => console.log(error)
    );
  }
  updatePylone() {
    this.pyloneService.updatePylone(this.id, this.pylone).subscribe(
      data => {
        console.log(data);
        this.pylone= new Pylone();
        this.gotoList();
      },
      error => console.log(error)
    );
  }
  onSubmit(){
    this.updatePylone();
    this.submitted = true;
  }
  gotoList(){
    this.router.navigate(['/pylones']);
  }

}
