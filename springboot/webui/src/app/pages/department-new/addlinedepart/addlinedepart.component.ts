import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/api/department.service';


interface errorMsg {
  field: any;
  message: any;
}

@Component({
  selector: 'app-addlinedepart',
  templateUrl: './addlinedepart.component.html',
  styleUrls: ['./addlinedepart.component.scss']
})
export class AddlinedepartComponent implements OnInit {

  public entryForm: FormGroup;
  

  submitted = false;
  errorMsg: errorMsg[] = [];
  basic: boolean = false;

    dropdownval=["yes","no","dont know"];
  	autocomlist= ["1000","1001","1002","1003","1004","1005","1006","1007","1008","1009","1010"];
	
  	private formCode: string = 'department_form';
	  // STORE FORM CODE IN SESSION
	  public key: string = "formCode";
	  public storage: Storage = sessionStorage;
  
  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private deptser:DepartmentService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.storage.setItem(this.key, this.formCode);
		console.log(this.storage.getItem(this.key));

   

    this.entryForm = this._fb.group({
      department: this._fb.array([this.initLinesForm()]),
      

    });
  
  }

  initLinesForm() {
    return this._fb.group({
      dname: [null],
      dhead: [null],
      dcontact: [null],
      no_ofEmp: [null],
      

                  // EXTENSION
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

  

  onSubmit() {
    console.log(this.entryForm.getRawValue()['department']);
    console.warn("my data"+this.entryForm.value);
    
    //console.log(this.entryForm.value);
    this.submitted = true;
    if (this.entryForm.invalid) {
      return;
    }
    this.onCreate();
  }

  onCreate() {
    console.warn("in the oncreate " + this.entryForm.getRawValue()['department']);
    
     this.deptser.create(this.entryForm.getRawValue()['department']).subscribe(data => {
       console.log(data)
       this.router.navigate(["/home/department/"]);
       },
       (error) => {
         console.log(error);
       }
     );
   }


   get controls() {
    return (this.entryForm.get("department") as FormArray).controls;
  }
  onRemoveLines(index: number) {
    (<FormArray>this.entryForm.get("department")).removeAt(index);
  }
  onAddLines() {
    (<FormArray>this.entryForm.get("department")).push(this.initLinesForm());
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

