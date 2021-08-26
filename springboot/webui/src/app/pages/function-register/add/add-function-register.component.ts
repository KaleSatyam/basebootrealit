import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import {
  FormBuilder,
  FormGroup
} from "@angular/forms";
import { MenuRegisterService } from "src/app/services/api/menu-register.service";
import { FunctionRegisterService } from "src/app/services/api/function-register.service";
import { MenuRegister } from "src/app/models/MenuRegister";

interface errorMsg {
  field: any;
  message: any;
}

@Component({
  selector: "add-function-register",
  templateUrl: "./add-function-register.component.html",
  styleUrls: ["./add-function-register.scss"],
})
export class AddFunctionRegisterComponent implements OnInit {
  public entryForm: FormGroup;
  submitted = false;
  basic: boolean = false;
  errorMsg: errorMsg[] = [];

  today_date: string;

  

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private functionRegisterService: FunctionRegisterService,
    private menuRegisterService: MenuRegisterService,
  ) {}


  ngOnInit() {
    this.getTodayDate();
    this.getMenuData();
    this.entryForm = this._fb.group({
      menu_id: [null],
      function_name: [null],
      function_action_name: [null],
      function_icon: [null],
      enable_flag: [null],
      end_date: [null]
    });
  }

  onSubmit() {
    console.log(this.entryForm.value);
    this.submitted = true;
    if (this.entryForm.invalid) {
      return;
    }
    this.onCreate();
  }

  onCreate() {
    this.errorMsg = [];
    this.functionRegisterService.create(this.entryForm.value).subscribe(
      (data) => {
        this.router.navigate(["../all"], { relativeTo: this.route });
      },
      (error) => {
        console.log(error);
       /*  const objectArray = Object.entries(error.error.fieldErrors);
        objectArray.forEach(([k, v]) => {
          //console.log(k);
          //console.log(v);
          this.errorMsg.push({ field: k, message: v });
          //this.errorMsg.
        });
        //console.log(this.errorMsg); */
      }
    );
  }

  getTodayDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const date_string: string = year + '-' + month + '-' + day;
    console.log(date_string);
    this.today_date = date_string; 
  }

  menuDate: any[];
  menuDropDown: any[] = [];
  getMenuData() {
    //this.menuRegisterService.getByAccountId().subscribe((data) => {
    //this.menuRegisterService.getAll().subscribe((data) => {
    this.menuRegisterService.getByAccountId().subscribe((data) => {
      this.menuDate = data;
      console.log('Menu List by Account Id : ', this.menuDate);
      const keys = this.menuDate.map((item) => {
        const container = {id: '', name: ''};
        container.id = item.id;
        container.name = item.main_menu_name;
          return container;
        });
        //this.columns.push({ prop: "id", name: "Actions", width: 65, cellTemplate: this.fieldById });
        console.log('Menu dropdown: ', keys);
        this.menuDropDown = keys;
        /* for(let key of keys) {
          this.columns.push(key);
        } */
      }, (err) => {
        console.log(err)
      }
    );
  }
}
