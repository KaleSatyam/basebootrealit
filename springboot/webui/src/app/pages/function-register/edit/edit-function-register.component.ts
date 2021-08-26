import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { FunctionRegister } from "src/app/models/FunctionRegister";
import { FunctionRegisterService } from "src/app/services/api/function-register.service";
import { MenuRegisterService } from "src/app/services/api/menu-register.service";

@Component({
  selector: "edit-function-register",
  templateUrl: "./edit-function-register.component.html",
  styleUrls: ["./edit-function-register.scss"],
})
export class EditFunctionRegisterComponent implements OnInit {
  updated = false;
  functionRegister: FunctionRegister;
  id: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menuRegisterService: MenuRegisterService,
    private functionRegisterService: FunctionRegisterService
  ) {}

  ngOnInit() {
    this.getMenuData();
    this.functionRegister = new FunctionRegister();
    this.id = this.route.snapshot.params["id"];
    console.log("update with id = ", this.id);
    this.getById(this.id);
  }

  getById(id: number) {
    this.functionRegisterService.getById(id).subscribe((data) => {
      this.functionRegister = data;
      //this.students = data.students;
    });
  }
  update() {
    this.functionRegisterService.update(this.id, this.functionRegister).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(["../../all"], { relativeTo: this.route });
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
    this.functionRegister = new FunctionRegister();
  }

  onSubmit() {
    this.updated = true;
    this.update();
  }

  back() {
    this.router.navigate(["../../all"], { relativeTo: this.route });
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
