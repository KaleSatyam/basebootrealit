import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { TeacherService } from "src/app/services/api/teacher.service";
import { Teacher } from "../Teacher";
@Component({
  selector: "all-teacher",
  templateUrl: "./all-teacher.component.html",
  styleUrls: ["./all-teacher.scss"],
})
export class AllTeacherComponent implements OnInit {
  @ViewChild("instructorById") instructorById: TemplateRef<any>;
  @ViewChild("txId") txId: TemplateRef<any>;
  @ViewChild(DatatableComponent) table: DatatableComponent;

  basic: boolean = false;
  whoColumns: Teacher; // who columns data
  columns: any[];
  rows: any[];
  temp = [];

  filterData: string;
  isLoading: boolean = false;
  teacher: any = [];
  //teacher: Teacher;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private teacherService: TeacherService
  ) { }

  ngOnInit() {
    this.getData();
    this.columns = [
      //{ prop: "id", name: "Actions", width: 65, cellTemplate: this.instructorById },
      { prop: "name", name: "First Name", width: 105 },
      { prop: "email", name: "Email", width: 150 },
      { prop: "phoneNumber", name: "Mobile Number", width: 190 },
      { prop: "salary", name: "Salary", width: 190 },
      // EXTENSION COLUMN START
      //{ prop: "extn1", name: "Test_f", width: 200 },
      // EXTENSION COLUMN END

      //{prop:"id"         , name: "Transactions"           , width:90, cellTemplate: this.txId   }
    ];
  }

  getData() {
    this.isLoading = true;
    this.teacherService.getAll().subscribe((data) => {
      this.isLoading = false;
      console.log(data);
      //console.log(data.items);
      this.teacher = data.items;
      this.rows = this.teacher;
      this.temp = [...this.teacher];
    });
  }

  doFilter(event) {
    let val = event.target.value.toLowerCase();
    // filter our data
    let temp = this.temp.filter((d) => {
      return (
        d.name.toLowerCase().indexOf(val) !== -1 ||
        !val ||
        d.lastName.toLowerCase().indexOf(val) !== -1 ||
        !val ||
        d.email.toLowerCase().indexOf(val) !== -1 ||
        !val ||
        d.phoneNumber.toLowerCase().indexOf(val) !== -1 ||
        !val ||
        d.salary.toLowerCase().indexOf(val) !== -1 ||
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
    this.teacherService.getById(id).subscribe((data) => {
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
