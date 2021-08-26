import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ExtensionField } from 'src/app/models/ExtensionField';
import { ExtensionService } from 'src/app/services/api/extension.service';
import { SalesNewService } from 'src/app/services/api/sales-new.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {


  @ViewChild("instructorById") instructorById: TemplateRef<any>;
  @ViewChild("txId") txId: TemplateRef<any>;
  @ViewChild(DatatableComponent) table: DatatableComponent;

  basic: boolean = false;

  columns: any[];
  rows: any[];
  temp = [];

  filterData: string;
  isLoading: boolean = false;
  sales: any = [];
  constructor(private router: Router,
    private route: ActivatedRoute,
    private salesNewService: SalesNewService,
    private extentionservice: ExtensionService
  ) { }

  extention: any
  fieldname: any
  mapping: any



  ngOnInit(): void {

    this.getData();
    this.columns = [
      { prop: "sid", name: "sid", width: 35 },
      { prop: "sname", name: " sname", width: 90 },
      { prop: "department", name: "Dept", width: 90 },
      { prop: "joiningDate", name: " Date", width: 90 },
      { prop: "status", name: " status", width: 90 },
      { prop: "iscontractbase", name: "iscontractbase", width: 90 },
      { prop: "contact_no", name: "contact_no", width: 90 },
      { prop: "about", name: "about", width: 90 },
      { prop: "userUrl", name: "userUrl", width: 90 },
      { prop: "country", name: "country", width: 90 },
      // { prop: "states", name: "states", width: 90 },
      { prop: "currency", name: "currency", width: 90 },
      { prop: "password", name: "password", width: 90 },
      // { prop: "vehicles", name: "vehicles", width: 90 },
      { prop: "email", name: "email", width: 90 } ];
      // { prop: "uploadprofile", name: "uploadprofile", width: 90 },



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
    this.salesNewService.getAll().subscribe((data) => {
      console.log(`calling getall service`);

      this.isLoading = false;
      console.log(data);
      console.log(data.sales);

      this.sales = data.sales


      this.temp = [...this.sales];
      this.rows = this.sales;
    });
  }


  goToAdd() {
    this.router.navigate(["../addsales"], { relativeTo: this.route });
  }
  goToEdit(id: number) {
    this.router.navigate(["../update/", id], { relativeTo: this.route });
  }
  goToReadOnly(id: number) {
    this.router.navigate(["../readsales", id], { relativeTo: this.route });
  }

}


