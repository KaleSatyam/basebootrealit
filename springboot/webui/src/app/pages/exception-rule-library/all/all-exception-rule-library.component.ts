import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Bcf_Exception_Rule_Library } from 'src/app/models/Bcf_Exception_Rule_Library';
import { ExceptionRuleLibraryService } from 'src/app/services/api/exception-rule-library.service';

@Component({
  selector: 'app-all-exception-rule-library',
  templateUrl: './all-exception-rule-library.component.html',
  styleUrls: ['./all-exception-rule-library.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AllExceptionRuleLibraryComponent implements OnInit {
  @ViewChild("getById") functionById: TemplateRef<any>;
  @ViewChild("txId") txId: TemplateRef<any>;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  
  basic: boolean = false;
  columns: any[];
  rows: any[];
  temp = [];

  isLoading: boolean = false;
  exceptionRuleLibrary: Bcf_Exception_Rule_Library[];
  //teacher: Teacher;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private exceptionRuleLibraryService: ExceptionRuleLibraryService
  ) {}

  ngOnInit() {
    this.getData();
    this.columns = [
      /* { prop: "id", name: "Actions", width: 65, cellTemplate: this.functionById }, */
      { prop: "tech_stack", name: "Technology Stack", width: 120 },
      { prop: "object_type", name: "Object Type", width: 100 },
      { prop: "sub_object_type", name: "Sub Object Type", width: 100 },
      { prop: "object_name_variable", name: "End Date", width: 190 },
      { prop: "object_name_dynamic_string", name: "Flag", width: 190 },
    ];
  }
  getData() {
    this.isLoading = true;
    this.exceptionRuleLibraryService.getAll().subscribe((data) => {
      this.isLoading = false;
      console.log(data);
      //console.log(data.items);
      this.exceptionRuleLibrary = data.items;
      this.rows = this.exceptionRuleLibrary;
      this.temp = [...this.exceptionRuleLibrary];
    });
  }

  doFilter(event) {
    let val = event.target.value.toLowerCase();
    // filter our data
    let temp = this.temp.filter((d) => {
      return (
        d.tech_stack.toLowerCase().indexOf(val) !== -1 ||
        !val ||
        d.object_type.toLowerCase().indexOf(val) !== -1 ||
        !val ||
        d.sub_object_type.toLowerCase().indexOf(val) !== -1 ||
        !val ||
        d.object_name_variable.toLowerCase().indexOf(val) !== -1 ||
        !val ||
        d.object_name_dynamic_string.toLowerCase().indexOf(val) !== -1 ||
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
}
