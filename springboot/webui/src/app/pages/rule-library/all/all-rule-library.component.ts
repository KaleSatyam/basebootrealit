import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Bcf_Exception_Rule_Library } from 'src/app/models/Bcf_Exception_Rule_Library';
import { AlertService } from 'src/app/services/alert.service';
import { RuleLibraryService } from 'src/app/services/api/rule-library.service';

@Component({
  selector: 'app-all-rule-library',
  templateUrl: './all-rule-library.component.html',
  styleUrls: ['./all-rule-library.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AllRuleLibraryComponent implements OnInit {
  @ViewChild("getById") functionById: TemplateRef<any>;
  @ViewChild("txId") txId: TemplateRef<any>;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  
  basic: boolean = false;
  columns: any[];
  rows: any[];
  temp = [];
  isLoading: boolean = false;
  ruleLibrary: Bcf_Exception_Rule_Library[];

  // copy rules
  tech_stacks = ['SpringMVC-Hibernate-Mysql', 'Angular-SpringBoot-Mysql', 'React-ReactNative-Mysql', 'React-ReactNative-MongoDB', 'Angular-SpringBoot-MongoDB', 'Php-Laravel-Mysql', 'MEAN'];
  object_types = ['form', 'bi', 'report', 'api'];
  sub_object_types = ['only header', 'only line', 'header line', 'header multiline', 'wrokflow', 'setup', 'std report', 'bi report', 'rest api'];

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private ruleLibraryService: RuleLibraryService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.initCopyRuleForm();

    this.getData();
    this.columns = [
      /* { prop: "id", name: "Actions", width: 65, cellTemplate: this.functionById }, */
      { prop: "tech_stack", name: "Technology Stack", width: 120 },
      { prop: "object_type", name: "Object Type", width: 100 },
      { prop: "sub_object_type", name: "Sub Object Type", width: 100 },
      { prop: "rule_name", name: "Rule Name", width: 100 },
      { prop: "identifier_start_string", name: "Starting String", width: 190 },
      { prop: "identifier_end_string", name: "Ending String", width: 190 },
      { prop: "replacement_string", name: "Replacement String", width: 105 },
      { prop: "file_code", name: "File Code", width: 105 },
      { prop: "rule_type", name: "Rule Type", width: 105 },
      { prop: "group_id", name: "Group Id", width: 60 }
    ];
  }
  getData() {
    this.isLoading = true;
    this.ruleLibraryService.getAll().subscribe((data) => {
      this.isLoading = false;
      console.log(data);
      //console.log(data.items);
      this.ruleLibrary = data.items;
      this.rows = this.ruleLibrary;
      this.temp = [...this.ruleLibrary];
    });
  }

  // rule copy code
  public copyRuleForm: FormGroup;
  submitted = false;
  initCopyRuleForm() {
    this.copyRuleForm = this._fb.group({
      from_tech_stack: [null],
      from_object_type: [null],
      from_sub_object_type: [null],
      to_tech_stack: [null],
      to_object_type: [null],
      to_sub_object_type: [null]
    });
  }
  onSubmit() {
    console.log(this.copyRuleForm.value);
    this.submitted = true;
    if (this.copyRuleForm.invalid) {
      return;
    }
    this.onCopy();
  }
  onCopy() {
    this.ruleLibraryService.copy(this.copyRuleForm.value).subscribe(
      (data) => {
        console.log(data);
        // alert service
        this.alertService.success('Rule Copied successfully');
        this.getData();
      },(err) => {
        console.log(err);
        this.alertService.error('Rule Copy Failed');
      }
    );
  }
      




  doFilter(event) {
    let val = event.target.value.toLowerCase();
    // filter our data
    let temp = this.temp.filter((d) => {
      return (
        d.tech_stack.toLowerCase().indexOf(val) !== -1 || !val ||
        d.object_type.toLowerCase().indexOf(val) !== -1 || !val ||
        d.sub_object_type.toLowerCase().indexOf(val) !== -1 || !val ||
        d.rule_name.toLowerCase().indexOf(val) !== -1 || !val ||
        d.rule_type.toLowerCase().indexOf(val) !== -1 || !val ||
        d.file_code.toLowerCase().indexOf(val) !== -1 || !val ||
        d.identifier_start_string.toLowerCase().indexOf(val) !== -1 || !val ||
        d.identifier_end_string.toLowerCase().indexOf(val) !== -1 || !val ||
        d.replacement_string.toLowerCase().indexOf(val) !== -1 || !val
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

  goToExceptionRule() {
    this.router.navigate(["/home/exception-rule-library"]);
  }
}

