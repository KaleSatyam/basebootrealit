import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Audit } from 'src/app/models/Audit';
import { Rn_Forms_Setup } from 'src/app/models/Rn_Forms_Setup';
import { FormSetupService } from '../../../services/api/form-setup.service';

@Component({
  selector: 'app-all-forms-setup',
  templateUrl: './all-forms-setup.component.html',
  styleUrls: ['./all-forms-setup.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AllFormsSetupComponent implements OnInit {
    @ViewChild('getById') selectById: TemplateRef<any>;
    @ViewChild('txId') txId: TemplateRef<any>;
    @ViewChild(DatatableComponent) table: DatatableComponent;
    basic: boolean=false;
    columns:any[];
    rows:any[];
    temp = [];

    filterData: string;
    isLoading:boolean=false;
    rn_forms_setup: Rn_Forms_Setup[];
    whoColumns: Audit;
    //teacher: Teacher;
    constructor(
        private router: Router, 
        private route: ActivatedRoute,
        private formSetupService: FormSetupService,
    ) { }

    ngOnInit() {
        this.getData();
        // COLUMNS
        this.columns = [
           /*  {prop:"form_id"         , name: "Actions"           , width:65}, */
            {prop:"form_name"       , name: "Form Name"   , width:120 },
            {prop:"form_desc"    , name: "Form Description"         , width:150 },
            {prop:"related_to"     , name: "Related To"       , width:190 },
            {prop:"page_event"     , name: "Page Event"       , width:190 },
            {prop: "button_caption", name: "Button Caption", width: 200},
            /* {prop:"form_id"         , name: "Go To Form"}, */
        ];
    }

        getData() {
            this.isLoading=true;
            this.formSetupService.getAll()
            .subscribe(data => {
                this.isLoading=false;
                console.log(data);
                this.rn_forms_setup = data.items;
                this.rows = this.rn_forms_setup;
                this.temp = [...this.rn_forms_setup];
            });
        }


      doFilter(event) {
        let val = event.target.value.toLowerCase();
        // filter our data
        let temp = this.temp.filter((d) => {
          return (
            (d.form_name.toLowerCase().indexOf(val) !== -1 || !val) || 
            (d.form_desc.toLowerCase().indexOf(val) !== -1 || !val) ||
            (d.related_to.toLowerCase().indexOf(val) !== -1 || !val) ||
            (d.page_event.toLowerCase().indexOf(val) !== -1 || !val) || 
            (d.button_caption.toLowerCase().indexOf(val) !== -1 || !val)
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
        this.router.navigate(["../edit/" + id], {relativeTo: this.route });
    }

    getById(id: number) {
        this.formSetupService.getById(id)
            .subscribe(data => {
                console.log("data from sarver", data);
                this.whoColumns = data;
                console.log("who columns: ",this.whoColumns);
            });
    }

    goToWhoColumns(id: number) {
        this.basic = !this.basic;
        this.getById(id);
    }

    goToForm(id: number) {
        this.router.navigate(['/home/dynamic-form-test1/all'], {queryParams: { form_id: id } });
        
    }
}

