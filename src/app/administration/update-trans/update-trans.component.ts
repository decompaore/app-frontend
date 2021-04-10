import { Component, OnInit } from '@angular/core';
import { Trans } from 'src/app/models/trans';
import { TransService } from 'src/app/services/trans.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-trans',
  templateUrl: './update-trans.component.html',
  styleUrls: ['./update-trans.component.css']
})
export class UpdateTransComponent implements OnInit {

  id: number;
  trans: Trans;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private transService: TransService) { }

  ngOnInit(): void {
    this.trans = new Trans();
    this.submitted = false;
    this.id =this.route.snapshot.params['id'];
    this.transService.getTrans(this.id).subscribe(
      data => {
        console.log(data)
        this.trans = data;
      },
      error => console.log(error)
    );
  }
  updateTrans() {
    this.transService.updateTrans(this.id, this.trans)
      .subscribe(data => {
        console.log(data);
        this.trans = new Trans();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateTrans();  
    this.submitted = true;  
  }

  gotoList() {
    this.router.navigate(['/transes']);
  }
  }

