import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';

import { DepartmentService } from 'src/app/services/api/department.service';
import { ExtensionService } from 'src/app/services/api/extension.service';
import { Department } from '../departmentmodel';

@Component({
  selector: 'app-alldepart',
  templateUrl: './alldepart.component.html',
  styleUrls: ['./alldepart.component.scss']
})
export class AlldepartComponent implements OnInit {

  @ViewChild("instructorById") instructorById: TemplateRef<any>;
  @ViewChild("txId") txId: TemplateRef<any>;
  @ViewChild(DatatableComponent) table: DatatableComponent;

  
  basic: boolean = false;

  columns: any[];
  rows: any[];
  temp = [];


  extention: any
  fieldname: any
  mapping: any

  filterData: string;
  isLoading: boolean = false;
  Department:Department[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private deptserv:DepartmentService,
    private extentionservice: ExtensionService
  ) { }

  ngOnInit(): void {

    this.getData();
    this.columns = [
      { prop: "did", name: "id", width: 65 },
      { prop: "dname", name: " Name", width: 105 },
      { prop: "dhead", name: "head", width: 150 },
      { prop: "dcontact", name: " contact", width: 190 },
      { prop: "no_ofEmp", name: "noofEmp", width: 190 },
      { prop: "extn1", name: "e1", width: 190 },
      { prop: "extn2", name: "e2", width: 190 },
      { prop: "extn3", name: "e3", width: 190 },
      { prop: "extn4", name: "e4", width: 190 },
      { prop: "extn5", name: "e5", width: 190 },
    ];

    //adding extentions to array if its true
    this.extentionservice.getAll().subscribe(ext => {
      console.warn(`total extentions    :`, ext)
      //   let id=ext.id
      // console.log("for loop id ", id);
      this.extention = ext
      for (let id of this.extention) {
        if (id.isActive == true) {
          console.warn(id);
          this.fieldname = id.field_name
          this.mapping = id.mapping
          console.warn(this.fieldname, this.mapping),
            this.columns.push(
              { prop: this.mapping, name: this.fieldname, width: 90 })
      }
      }
    })  
  }


  getData() {
    this.isLoading = true;
    this.deptserv.getAll().subscribe((data) => {
      console.log(`calling getall service`);

      this.isLoading = false;
      console.log(data);
     console.log(data.department);
     
      this.Department = data.department
      this.temp = [...this.Department];
      this.rows = this.Department;
    });
  }

  goToAdd() {
    this.router.navigate(["../adddept"], { relativeTo: this.route });
  }
  goToEdit(id: number) {
    this.router.navigate(["../editdep/", id], { relativeTo: this.route });
  }
  goToReadOnly(id: number) {
    this.router.navigate(["../readdep", id],{ relativeTo: this.route });
  }
}
