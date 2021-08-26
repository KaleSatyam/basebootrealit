import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { salesperson } from 'src/app/pages/sales-new/salesperson';
import { SalesNewService } from 'src/app/services/api/sales-new.service';



interface salesinterface{
  sid: number;
   sname: String;
    department: String;
    joiningDate: Date;
    status: String;
    iscontractbase: string,
      contact_no: number,
      country: string,
      userUrl:string ,
      currency: string,
      password: string,
      email: string,
      about: string,
    salesperson:salesperson[]
}
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  updated = false;
  sales ;
  sid: number;
  salesperson:salesperson[];


  constructor(private router: Router,
    private route:ActivatedRoute,
    private salesservice:SalesNewService
    ) { }

  ngOnInit(): void {

    this.sales;
    this.sid = this.route.snapshot.params["id"];
    console.log("update with id = ", this.sid);
    this.getById(this.sid);
  }

  getById(sid: number) {
    this.salesservice.getDataById(sid).subscribe((data) => {
      this.sales = data;
      this.salesperson=data.salesperson;
      //this.students = data.students;
      
    });
  }

    update() {
      this.salesservice.update(this.sid, this.sales).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(["/home/sales-new/all"]);
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
