import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Audit } from 'src/app/models/Audit';
import { DynamicForm } from 'src/app/models/DynamicForm';
import { DynamicTransactionService } from 'src/app/services/api/dynamic-transaction.service';
import { FormSetupService } from 'src/app/services/api/form-setup.service';

interface Column {
  prop: string, 
  name: string, 
  width: number, 
  cellTemplate?: any
}
@Component({
  selector: 'app-all-dynamic-form',
  templateUrl: './all-dynamic-form.component.html',
  styleUrls: ['./all-dynamic-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AllDynamicFormComponent implements OnInit {
  @ViewChild("fieldById") fieldById: TemplateRef<any>;
  @ViewChild("txId") txId: TemplateRef<any>;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  
  basic: boolean = false;
  whoColumns: Audit; // who columns data
  rows: any[];
  temp = [];

  filterData: string;
  isLoading: boolean = false;
  dynamicForm: DynamicForm[];

  uiData: any[];
  form_id: number;
  columns: Column[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dynamicTransactionService: DynamicTransactionService,
    private  formSetupService: FormSetupService
  ) {}

  ngOnInit() {
    // get data from params
    this.route.queryParams.subscribe(params => {
      this.form_id = +params['form_id'];
    });
    console.log('form_id ', this.form_id);
    this.getData(this.form_id);
    console.log('columns = ', this.columns);
  }

  getData(id: number) {
    this.isLoading = true;
    // table column names
    this.getColumnsWithData(id);
    this.dynamicTransactionService.getByFormId(id).subscribe((data) => {
      this.isLoading = false;
      console.log('DYNAMIC TABLE DATA: ', data);
      this.dynamicForm = data;
      this.rows = this.dynamicForm;
      this.temp = [...this.dynamicForm];
    });
  }

 
  getColumnsWithData(id: number) {
    // ui data
    this.formSetupService.getById(id).subscribe((data) => {
      this.uiData = data.components;
      //console.log('ui data: ', this.uiData);
      const keys = this.uiData.map((item) => {
        const container = {prop: '', name: '', width: 120};
        container.prop = item.mapping;
        container.name = item.label.toUpperCase();
          return container;
        });
        //this.columns.push({ prop: "id", name: "Actions", width: 65, cellTemplate: this.fieldById });
        //console.log(keys);
        for(let key of keys) {
          this.columns.push(key);
        }
      }, (err) => {
        console.log(err)
      }
    );
  }

  doFilter(event) {
    let val = event.target.value.toLowerCase();
    // filter our data
    let temp = this.temp.filter((d) => {
      return (
        d.comp1.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp2.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp3.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp4.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp5.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp6.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp7.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp8.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp9.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp10.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp11.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp12.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp13.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp14.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp15.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp16.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp17.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp18.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp19.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp20.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp21.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp22.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp23.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp24.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp25.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp_l26.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp_l27.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp_l28.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp_l29.toLowerCase().indexOf(val) !== -1 || !val ||
        d.comp_l30.toLowerCase().indexOf(val) !== -1 || !val
      );
    });
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  goToAdd() {
    this.router.navigate(["../add"], { relativeTo: this.route, queryParams: { form_id: this.form_id } });
  }

  goToReadOnly(id: number) {
    this.router.navigate(["../readonly/" + id], { relativeTo: this.route, queryParams: { form_id: this.form_id } });
  }

  goToEdit(id: number) {
    this.router.navigate(["../edit/" + id], { relativeTo: this.route,  queryParams: { form_id: this.form_id }  });
  }

  goToWhoColumns(id: number) {
    this.basic = !this.basic;
  }
}
