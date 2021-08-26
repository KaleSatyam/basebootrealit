import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Audit } from 'src/app/models/Audit';
import { Rn_Forms_Setup } from 'src/app/models/Rn_Forms_Setup';
import { Rn_Menu_Group_Header } from 'src/app/models/Rn_Menu_Group_Header';
import { MenuGroupService } from 'src/app/services/api/menu-group.service';
import { FormSetupService } from '../../../services/api/form-setup.service';

@Component({
  selector: 'app-all-menu-group',
  templateUrl: './all-menu-group.component.html',
  styleUrls: ['./all-menu-group.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AllMenuGroupComponent implements OnInit {
    @ViewChild('getById') selectById: TemplateRef<any>;
    @ViewChild('txId') txId: TemplateRef<any>;
    @ViewChild(DatatableComponent) table: DatatableComponent;
    basic: boolean=false;
    columns:any[];
    rows:any[];
    temp = [];

    filterData: string;
    isLoading:boolean=false;
    rn_menu_group_header: Rn_Menu_Group_Header[];
    whoColumns: Audit;
    constructor(
        private router: Router, 
        private route: ActivatedRoute,
        private menuGroupService: MenuGroupService,
    ) { }

    ngOnInit() {
        this.getData();
        // COLUMNS
        this.columns = [
            /* {prop:"id"         , name: "Actions"           , width:65, cellTemplate: this.selectById   }, */
            {prop:"menu_name"       , name: "Menu Name"   , width:150 },
            {prop:"description"    , name: "Description"         , width:180 },
            {prop:"active"     , name: "Enabled"       , width:160 },
            {prop:"start_date"     , name: "Start Date"       , width:150 },
            {prop: "end_date", name: "End Date", width: 150}
        ];
    }

        getData() {
            this.isLoading=true;
            this.menuGroupService.getAll()
            .subscribe(data => {
                this.isLoading=false;
                console.log(data);
                this.rn_menu_group_header = data.items;
                this.rows = this.rn_menu_group_header;
                this.temp = [...this.rn_menu_group_header];
            });
        }


      doFilter(event) {
        let val = event.target.value.toLowerCase();
        // filter our data
        let temp = this.temp.filter((d) => {
          return (
            (d.menu_name.toLowerCase().indexOf(val) !== -1 || !val) || 
            (d.description.toLowerCase().indexOf(val) !== -1 || !val) ||
            (d.active.toLowerCase().indexOf(val) !== -1 || !val) ||
            (d.start_date.toLowerCase().indexOf(val) !== -1 || !val) || 
            (d.end_date.toLowerCase().indexOf(val) !== -1 || !val)
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
        this.menuGroupService.getById(id)
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
}

