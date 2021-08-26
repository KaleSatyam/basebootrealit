import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import {
  FormBuilder,
  FormGroup
} from "@angular/forms";
import { MenuRegisterService } from "src/app/services/api/menu-register.service";
import { ValidationError } from "src/app/models/ValidationError";

@Component({
  selector: "add-menu-register",
  templateUrl: "./add-menu-register.component.html",
  styleUrls: ["./add-menu-register.scss"],
})
export class AddMenuRegisterComponent implements OnInit {
  public entryForm: FormGroup;
  submitted = false;
  basic: boolean = false;
  errorMsg: ValidationError[] = [];

  today_date: string;

  

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private menuRegisterService: MenuRegisterService
  ) {}


  ngOnInit() {
    this.getTodayDate();
    this.entryForm = this._fb.group({
      main_menu_name: [null],
      main_menu_action_name: [null],
      main_menu_icon: [null],
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
    this.menuRegisterService.create(this.entryForm.value).subscribe(
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
    const date_string = year + '-' + month + '-' + day;
    console.log(date_string);
    this.today_date = date_string;
    
  }
}
