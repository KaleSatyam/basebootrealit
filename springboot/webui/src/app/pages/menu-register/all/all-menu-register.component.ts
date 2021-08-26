import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { TeacherService } from "src/app/services/api/teacher.service";
import { MenuRegisterService } from "src/app/services/api/menu-register.service";
import { MenuRegister } from "src/app/models/MenuRegister";

@Component({
  selector: "all-menu-register",
  templateUrl: "./all-menu-register.component.html",
  styleUrls: ["./all-menu-register.scss"],
})
export class AllMenuRegisterComponent implements OnInit {
 // @ViewChild("getById") menuById: TemplateRef<any>;
  //@ViewChild("txId") txId: TemplateRef<any>;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  
  basic: boolean = false;
  whoColumns: any; // who columns data
  columns: any[];
  rows: any[];
  temp = [];

  filterData: string;
  isLoading: boolean = false;
  menu: MenuRegister[];
  //teacher: Teacher;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menuRegisterService: MenuRegisterService
  ) {}

  ngOnInit() {
    this.getData();
    this.columns = [
      { prop: "id", name: "Actions", width: 65 },
      { prop: "main_menu_name", name: "Menu Name", width: 105 },
      { prop: "main_menu_action_name", name: "Action Link", width: 150 },
      { prop: "main_menu_icon", name: "Menu Icon", width: 190 },
      { prop: "enable_flag", name: "Flag", width: 190 },
      { prop: "end_date", name: "End Date", width: 190 },
    ];
  }

  getData() {
    this.isLoading = true;
    this.menuRegisterService.getAll().subscribe((data) => {
      this.isLoading = false;
      console.log(data);
      //console.log(data.items);
      this.menu = data.items;
      this.rows = this.menu;
      this.temp = [...this.menu];
    });
  }

  doFilter(event) {
    let val = event.target.value.toLowerCase();
    // filter our data
    let temp = this.temp.filter((d) => {
      return (
        d.main_menu_name.toLowerCase().indexOf(val) !== -1 ||
        !val ||
        d.main_menu_action_name.toLowerCase().indexOf(val) !== -1 ||
        !val ||
        d.main_menu_icon.toLowerCase().indexOf(val) !== -1 ||
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
    this.menuRegisterService.getById(id).subscribe((data) => {
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
