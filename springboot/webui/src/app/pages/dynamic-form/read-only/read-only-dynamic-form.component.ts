import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicForm } from 'src/app/models/DynamicForm';
import { DynamicTransactionService } from 'src/app/services/api/dynamic-transaction.service';
import { FormSetupService } from 'src/app/services/api/form-setup.service';
@Component({
  selector: 'app-read-only-dynamic-form',
  templateUrl: './read-only-dynamic-form.component.html',
  styleUrls: ['./read-only-dynamic-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ReadOnlyDynamicFormComponent implements OnInit {

  basic: boolean = false;
  id: number;
  dynamicForm: DynamicForm;
  form_id: number;
  uiData: any[];

  constructor(
      private router: Router,
      private route: ActivatedRoute,
       private dynamicTransactionService: DynamicTransactionService,
       private formSetupService: FormSetupService) { }

  ngOnInit() {
    // fetch path variable data 
    this.id = this.route.snapshot.params['id']; 
    console.log('id = ', this.id);
    // fetch query param data
    this.route.queryParams.subscribe(params => {
        this.form_id = +params['form_id'];
        console.log('form id from query param = ', this.form_id);
      });
      this.getComponentsData(this.form_id);
      this.getByIdAndFormId(this.id, this.form_id);
  }

  form_name: string;
  componentsData: any[];
  getComponentsData(id: number) {
    this.formSetupService.getById(id).subscribe(data => {
      console.log('readonly-dynamic-form components data ', data);
      this.componentsData = data.components;
      this.form_name = data.form_name;
    }, err => {
      console.log(err);
      }
    );
  }

  getByIdAndFormId(id: number, form_id: number) {
      this.dynamicForm = new DynamicForm();
      this.dynamicTransactionService.getByIdAndFormId(id, form_id)
          .subscribe(data => {
              console.log('dynamic-form data ', data);
              this.dynamicForm = data;
              /* const margedObj = Object.assign({}, this.uiData, this.formComponents)
              console.log(margedObj);
              this.ui = margedObj; */

              /* let values1 = [];
              for(let key in this.dynamicForm) {
                if(key.startsWith('comp')) {
                  if(this.dynamicForm[key] !== null) {
                    values1.push(this.dynamicForm[key]);
                  }
                }
              }
              console.log(values1); */

              // working yes
              /* const keys = this.componentsData.map((item, i) => {
                const container = { label: '', values: ''};
                container.label = item.label;
                //container.values = values1[i];
                container.values = this.dynamicForm[item.mapping];
                  return container;
                });
              console.log(keys);
              this.uiData = keys; */
              
          }, err => {
              return console.log(err);
            }
          );
  }

  goToWhoColumns() {
      this.basic = !this.basic;
  }

  back() {
    //this.router.navigate(['../../all'], {relativeTo: this.route });
      this.router.navigate(['../../all'], {relativeTo: this.route, queryParams: { form_id: this.form_id } });
  }

}
