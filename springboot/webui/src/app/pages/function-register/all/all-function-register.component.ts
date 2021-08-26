import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { FunctionRegisterService } from "src/app/services/api/function-register.service";
import { FunctionRegister } from "src/app/models/FunctionRegister";

@Component({
  selector: "all-function-register",
  templateUrl: "./all-function-register.component.html",
  styleUrls: ["./all-function-register.scss"],
})
export class AllFunctionRegisterComponent implements OnInit {
  @ViewChild("getById") functionById: TemplateRef<any>;
  @ViewChild("txId") txId: TemplateRef<any>;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  
  basic: boolean = false;
  whoColumns: any; // who columns data
  columns: any[];
  rows: any[];
  temp = [];

  filterData: string;
  isLoading: boolean = false;
  functionRegister: FunctionRegister[];
  //teacher: Teacher;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private functionRegisterService: FunctionRegisterService
  ) {}

  ngOnInit() {
    this.getData();
    this.columns = [
      /* { prop: "id", name: "Actions", width: 65, cellTemplate: this.functionById }, */
      { prop: "function_name", name: "Function Name", width: 105 },
      { prop: "function_action_name", name: "Function Action Link", width: 150 },
      { prop: "function_icon", name: "Function Icon", width: 190 },
      { prop: "end_date", name: "End Date", width: 190 },
      /* { prop: "enable_flag", name: "Flag", width: 190 }, */
    ];
  }
  getData() {
    this.isLoading = true;
    this.functionRegisterService.getAll().subscribe((data) => {
      this.isLoading = false;
      console.log(data);
      //console.log(data.items);
      this.functionRegister = data.items;
      this.rows = this.functionRegister;
      this.temp = [...this.functionRegister];
    });
  }

  doFilter(event) {
    let val = event.target.value.toLowerCase();
    // filter our data
    let temp = this.temp.filter((d) => {
      return (
        d.function_name.toLowerCase().indexOf(val) !== -1 ||
        !val ||
        d.function_action_name.toLowerCase().indexOf(val) !== -1 ||
        !val ||
        d.function_icon.toLowerCase().indexOf(val) !== -1 ||
        !val ||
        d.enable_flag.toLowerCase().indexOf(val) !== -1 ||
        !val ||
        d.end_date.toLowerCase().indexOf(val) !== -1 ||
        !val
      );
    });
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  goToAdd() {
    this.router.navigate(["../add"], { relativeTo: this.route });
  }

  goToReadOnly(id: number) {
    this.router.navigate(["../readonly/" + id], { relativeTo: this.route });
  }

  goToEdit(id: number) {
    this.router.navigate(["../edit/" + id], { relativeTo: this.route });
  }

  getById(id: number) {
    //this.whoColumns = new Teacher();
    this.functionRegisterService.getById(id).subscribe((data) => {
      console.log("data from sarver", data);
      this.whoColumns = data;
      console.log("who columns: ", this.whoColumns);
    });
  }

  goToWhoColumns(id: number) {
    this.basic = !this.basic;
    this.getById(id);
  }
}
