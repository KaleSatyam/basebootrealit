import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { Audit } from "src/app/models/Audit";
import { Bcf_TechnologyStack } from "src/app/models/Bcf_TechnologyStack";
import { TechnologyStackService } from "src/app/services/api/technology-stack.service";

@Component({
  selector: "app-all-technology-stack",
  templateUrl: "./all-technology-stack.component.html",
  styleUrls: ["./all-technology-stack.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AllTechnologyStackComponent implements OnInit {
  @ViewChild("getById") selectById: TemplateRef<any>;
  @ViewChild("txId") txId: TemplateRef<any>;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  basic: boolean = false;
  columns: any[];
  rows: any[];
  temp = [];

  filterData: string;
  isLoading: boolean = false;
  bcf_technologyStack: Bcf_TechnologyStack[];
  whoColumns: Audit;
  constructor(
    private ref: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private technologyStackService: TechnologyStackService
  ) {}
  ngOnInit() {
    this.getData();
    // COLUMNS
    this.columns = [
      /* { prop: "id", name: "Actions", width: 70, cellTemplate: this.selectById }, */
      { prop: "tech_stack", name: "Technology Stack", width: 200 },
      { prop: "tech_stack_key", name: "Technology Stack Key", width: 150 },
      { prop: "base_prj_file_name", name: "Base File Name", width: 180 },
      /* { prop: "active", name: "Active", width: 90, cellTemplate: this.txId }, */
    ];
  }

  getData() {
    this.isLoading = true;
    this.technologyStackService.getAll().subscribe((data) => {
      this.isLoading = false;
      console.log(data);
      this.bcf_technologyStack = data.items;
      this.rows = this.bcf_technologyStack;
      this.temp = [...this.bcf_technologyStack];
    });
  }

  doFilter(event) {
    let val = event.target.value.toLowerCase();
    // filter our data
    let temp = this.temp.filter((d) => {
      return (
        d.tech_stack.toLowerCase().indexOf(val) !== -1 ||
        !val ||
        d.tech_stack_key.toLowerCase().indexOf(val) !== -1 ||
        !val ||
        d.tags.toLowerCase().indexOf(val) !== -1 ||
        !val ||
        d.base_prj_file_name.toLowerCase().indexOf(val) !== -1 ||
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

  toggleStatus(id: any, value: any) {
    console.log("id : ", id, " value : ", value);
    this.technologyStackService.setActive(id).subscribe(
      (data) => {
        console.log(data);
        //this.getData();
        this.ref.detectChanges();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
