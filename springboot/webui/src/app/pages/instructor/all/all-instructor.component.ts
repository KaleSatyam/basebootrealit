import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from 'src/app/services/api/rn_instructor.service';
import { DatePipe } from '@angular/common';
import { DatatableComponent } from '@swimlane/ngx-datatable';


interface Rows {
    id: number,
    firstName : string,
    lastName: string,
    email: string,
    createdAt :  Date,
    updatedAt : Date
}

@Component({
	selector: 'all-instructor',
	templateUrl: './all-instructor.component.html',
    styleUrls: [ './all-instructor.scss'],
})
export class AllInstructorComponent implements OnInit {
    @ViewChild('instructorById') instructorById: TemplateRef<any>;
    @ViewChild(DatatableComponent) table: DatatableComponent;
    //@ViewChild("filter") filter: ElementRef;
    columns:any[];
    rows:Rows[];
    temp = [];

    filterData: string;
    isLoading:boolean=false;

    datePipe: DatePipe;


    instructors: any = [];
    constructor(
        private router: Router, 
        private route: ActivatedRoute,
        private instructorService: InstructorService,
    ) { }

    ngOnInit() {
        this.getData();
        this.columns=[
            {prop:"id"         , name: "Actions"           , width:65, cellTemplate: this.instructorById   },
            {prop:"firstName"       , name: "First Name"   , width:105 },
            {prop:"lastName"     , name: "Last Name"       , width:85 },
            {prop:"email"    , name: "Email"         , width:180 },
            {prop:"createdAt" , name: "Created At"      , width:190 },
            {prop:"updatedAt"     , name: "Updated At"     , width:190  },
        ];
    }

        getData() {
            this.isLoading=true;
            this.instructorService.getAll()
            .subscribe(data => {
                this.isLoading=false;
                console.log(data);
                console.log(data.items);
                this.instructors = data.items; // set instructor data 
                this.rows = this.instructors; // data shows in table
                this.temp = [...this.instructors]; // for filtering
            });
        }

    getById(id: number) {
        this.instructorService.getById(id)
            .subscribe(data => {
                console.log(data);
            })

    }

      doFilter(event) {
        let val = event.target.value.toLowerCase();
        // filter our data
        let temp = this.temp.filter((d) => {
          return (
            (d.firstName.toLowerCase().indexOf(val) !== -1 || !val) || 
            (d.lastName.toLowerCase().indexOf(val) !== -1 || !val) ||
            (d.email.toLowerCase().indexOf(val) !== -1 || !val)
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
}
