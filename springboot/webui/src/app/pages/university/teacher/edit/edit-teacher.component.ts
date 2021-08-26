import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Teacher } from "../Teacher";
import { HttpErrorResponse } from "@angular/common/http";
import { TeacherService } from "src/app/services/api/teacher.service";
import { Student } from "../../student/Student";

@Component({
  selector: "edit-teacher",
  templateUrl: "./edit-teacher.component.html",
  styleUrls: ["./edit-teacher.scss"],
})
export class EditTeacherComponent implements OnInit {
  updated = false;
  teacher: Teacher;
  students: Student[];
  id: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private teacherService: TeacherService
  ) {}

  ngOnInit() {
    this.teacher = new Teacher();
    this.id = this.route.snapshot.params["h_id"];
    console.log("update with id = ", this.id);
    this.getById(this.id);
  }

  getById(id: number) {
    this.teacherService.getById(id).subscribe((data) => {
      this.teacher = data;
      this.students = data.students;
    });
  }
  update() {
    this.teacherService.update(this.id, this.teacher).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(["../../all"], { relativeTo: this.route });
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
    this.teacher = new Teacher();
  }

  onSubmit() {
    this.updated = true;
    this.update();
  }

  back() {
    this.router.navigate(["../../all"], { relativeTo: this.route });
  }
}
