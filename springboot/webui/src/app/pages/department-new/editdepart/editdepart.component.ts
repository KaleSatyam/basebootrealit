import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/api/department.service';

@Component({
  selector: 'app-editdepart',
  templateUrl: './editdepart.component.html',
  styleUrls: ['./editdepart.component.scss']
})
export class EditdepartComponent implements OnInit {
  updated = false;
  depart:any=[]
  did: number;
  

  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private departserv:DepartmentService
  ) { }

  ngOnInit(): void {
    this.depart;
    this.did = this.route.snapshot.params["did"];
    console.warn("my id"+this.did);
    
    console.log("update with id = ", this.did);
    this.getById(this.did);
  }


  getById(id) {
    this.departserv.getDataById(id).subscribe((data) => {
      this.depart = data;
      console.warn("getby data   " +this.depart);
      
    });
  }

  update() {
    this.departserv.update(this.did,this.depart).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(["/home/department/"]);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  onSubmit() {
    this.updated = true;
    this.update();
  }
}
