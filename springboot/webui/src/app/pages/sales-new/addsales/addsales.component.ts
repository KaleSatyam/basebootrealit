import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatatableGroupHeaderTemplateDirective } from '@swimlane/ngx-datatable';
import { SalesNewService } from 'src/app/services/api/sales-new.service';


interface errorMsg {
  field: any;
  message: any;
}

@Component({
  selector: 'app-addsales',
  templateUrl: './addsales.component.html',
  styleUrls: ['./addsales.component.scss']
})
export class AddsalesComponent implements OnInit {



  private formCode: string = 'sales_form';
  // STORE FORM CODE IN SESSION
  public key: string = "formCode";
  public storage: Storage = sessionStorage;


  basic: boolean = false;

  public entryForm: FormGroup;
  submitted = false;
  errorMsg: errorMsg[] = [];

  constructor(
    public datepipe: DatePipe,
    private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private SalesNewService: SalesNewService,

  ) { }



  ngOnInit() {

    this.storage.setItem(this.key, this.formCode);
    console.log(this.storage.getItem(this.key));

    this.entryForm = this._fb.group({
      sname: [null],
      department: [null],
      // joiningDate: [null],
      // status: [null],

      // // states:[this.arr.toString()],
      // iscontractbase: [null],
      // contact_no: [null],
      // country: [null],
      // userUrl: [null],
      // currency: [null],
      // password: [null],
      // email: [null],
      // // uploadprofile: [null],
      // about: [null],

      salesperson: this._fb.array([this.initLinesForm()]),


      //Extentions
      extn1: [null],
      extn2: [null],
      extn3: [null],
      extn4: [null],
      extn5: [null],
      extn6: [null],
      extn7: [null],
      extn8: [null],
      extn9: [null],
      extn10: [null],
      extn11: [null],
      extn12: [null],
      extn13: [null],
      extn14: [null],
      extn15: [null],
      // FLEX
      flex1: [null],
      flex2: [null],
      flex3: [null],
      flex4: [null],
      flex5: [null],

    });
  }



  initLinesForm() {
    return this._fb.group({

      pname: [null],



    });
  }

  date = new Date();
  datechange() {
    console.warn(this.date);
    let latest_date = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    console.log(latest_date);
    console.log(typeof (latest_date));
    console.log(typeof (this.date));



  }


  onSubmit() {



    console.warn("calling submit");

    //console.log(this.entryForm.value);
    this.submitted = true;
    if (this.entryForm.invalid) {
      return;
    }
    this.onCreate();
  }

  // onCreate() {
  //   this.SalesNewService.create(this.entryForm.value).subscribe(data => {
  //     console.log(data),
  //     // this.router.navigate(["/home/sales-new/all"]);,
  //     (error) =>
  //      { console.log(error); 

  //     }

  // }

  onCreate() {
    console.warn("in the oncreate ");

    this.SalesNewService.create(this.entryForm.value).subscribe(data => {
      console.log(data)
      this.router.navigate(["/home/sales-new/all"]);
    },
      (error) => {
        console.log(error);
      }
    );
  }



  get controls() {
    return (this.entryForm.get("salesperson") as FormArray).controls;
  }
  onRemoveLines(index: number) {
    (<FormArray>this.entryForm.get("salesperson")).removeAt(index);
  }
  onAddLines() {
    (<FormArray>this.entryForm.get("salesperson")).push(this.initLinesForm());
  }



  extensionBuild() {
    this.basic = !this.basic;
    //this.basic = true;
    console.log("button status: ", this.basic);
  }

  goToExt() {
    this.router.navigate(['extension/all'], { relativeTo: this.route });
  }

}
