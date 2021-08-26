import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ValidationError } from "src/app/models/ValidationError";
import { ExceptionRuleLibraryService } from "src/app/services/api/exception-rule-library.service";

@Component({
  selector: "app-add-exception-rule-library",
  templateUrl: "./add-exception-rule-library.component.html",
  styleUrls: ["./add-exception-rule-library.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AddExceptionRuleLibraryComponent implements OnInit {
  public entryForm: FormGroup;
  submitted = false;
  basic: boolean = false;
  errorMsg: ValidationError[] = []; // backend validation field error message

  tech_stacks = ["Angular-SpringBoot-Mysql", "SpringMVC-Hibernate-Mysql"];
  tech_stack_key = ["aspmy", "sphmy"];
  object_types = ["form", "bi", "report"];
  sub_object_types = ["only header", "only line"];

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private exceptionRuleLibraryService: ExceptionRuleLibraryService
  ) {}

  ngOnInit() {
    this.entryForm = this._fb.group({
      tech_stack: [null],
      object_type: [null],
      sub_object_type: [null],
      object_name_variable: [null],
      object_name_dynamic_string: [null]
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
    this.exceptionRuleLibraryService.save(this.entryForm.value).subscribe(
      (data) => {
        this.router.navigate(["../all"], { relativeTo: this.route });
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
  }
}
