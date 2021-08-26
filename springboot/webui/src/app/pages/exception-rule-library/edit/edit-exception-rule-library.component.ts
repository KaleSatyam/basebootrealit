import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Bcf_Exception_Rule_Library } from "src/app/models/Bcf_Exception_Rule_Library";
import { ValidationError } from "src/app/models/ValidationError";
import { ExceptionRuleLibraryService } from "src/app/services/api/exception-rule-library.service";

@Component({
  selector: "app-edit-exception-rule-library",
  templateUrl: "./edit-exception-rule-library.component.html",
  styleUrls: ["./edit-exception-rule-library.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EditExceptionRuleLibraryComponent implements OnInit {
  updated = false;
  exceptionRuleLibrary: Bcf_Exception_Rule_Library;
  id: number;

  errorMsg: ValidationError[] = []; // backend validation field error message

  tech_stacks = ['Angular-SpringBoot-Mysql', 'SpringMVC-Hibernate-Mysql'];
  tech_stack_key = ['aspmy', 'sphmy'];
  object_types = ['form', 'bi', 'report'];
  sub_object_types = ['only header', 'only line'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private exceptionRuleLibraryService: ExceptionRuleLibraryService
  ) {}

  ngOnInit() {
    this.exceptionRuleLibrary = new Bcf_Exception_Rule_Library();
    this.id = this.route.snapshot.params["id"];
    console.log("update with id = ", this.id);
    this.getById(this.id);
  }

  getById(id: number) {
    this.exceptionRuleLibraryService.getById(id).subscribe(
      (data) => {
        this.exceptionRuleLibrary = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  update() {
    this.exceptionRuleLibraryService
      .update(this.id, this.exceptionRuleLibrary)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(["../../all"], { relativeTo: this.route });
        },
        (error) => {
          console.log(error);
          const objectArray = Object.entries(error.error.fieldErrors);
          objectArray.forEach(([k, v]) => {
            console.log(k);
            console.log(v);
            this.errorMsg.push({ field: k, message: v });
          });
          console.log(this.errorMsg); // this will come from backend
        }
      );
    this.exceptionRuleLibrary = new Bcf_Exception_Rule_Library();
  }

  onSubmit() {
    this.updated = true;
    this.update();
  }

  back() {
    this.router.navigate(["../../all"], { relativeTo: this.route });
  }
}
