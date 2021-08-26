import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { MenuRegister } from "src/app/models/MenuRegister";
import { MenuRegisterService } from "src/app/services/api/menu-register.service";

@Component({
  selector: "edit-menu-register",
  templateUrl: "./edit-menu-register.component.html",
  styleUrls: ["./edit-menu-register.scss"],
})
export class EditMenuRegisterComponent implements OnInit {
  updated = false;
  menu: MenuRegister;
  id: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menuRegisterService: MenuRegisterService
  ) {}

  ngOnInit() {
    this.menu = new MenuRegister();
    this.id = this.route.snapshot.params["id"];
    console.log("update with id = ", this.id);
    this.getById(this.id);
  }

  getById(id: number) {
    this.menuRegisterService.getById(id).subscribe((data) => {
      this.menu = data;
      //this.students = data.students;
    });
  }
  update() {
    this.menuRegisterService.update(this.id, this.menu).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(["../../all"], { relativeTo: this.route });
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
    this.menu = new MenuRegister();
  }

  onSubmit() {
    this.updated = true;
    this.update();
  }

  back() {
    this.router.navigate(["../../all"], { relativeTo: this.route });
  }
}
