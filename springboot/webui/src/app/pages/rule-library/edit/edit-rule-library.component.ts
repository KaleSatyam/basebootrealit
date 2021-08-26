import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Bcf_Rule_Library } from "src/app/models/Bcf_Rule_Library";
import { ValidationError } from "src/app/models/ValidationError";
import { RuleLibraryService } from "src/app/services/api/rule-library.service";

@Component({
  selector: "app-edit-rule-library",
  templateUrl: "./edit-rule-library.component.html",
  styleUrls: ["./edit-rule-library.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EditRuleLibraryComponent implements OnInit {
  updated = false;
  ruleLibrary: Bcf_Rule_Library;
  id: number;

  errorMsg: ValidationError[] = []; // backend validation field error message

  tech_stacks = ['Angular-SpringBoot-Mysql', 'SpringMVC-Hibernate-Mysql'];
  tech_stack_key = ['aspmy', 'sphmy'];
  object_types = ['form', 'bi', 'report'];
  sub_object_types = ['only header', 'only line'];


  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ruleLibraryService: RuleLibraryService
  ) {}

  ngOnInit() {
    this.ruleLibrary = new Bcf_Rule_Library();
    this.id = this.route.snapshot.params["id"];
    console.log("update with id = ", this.id);
    this.getById(this.id);
  }

  getById(id: number) {
    this.ruleLibraryService.getById(id).subscribe(
      (data) => {
        this.ruleLibrary = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  update() {
    this.ruleLibraryService.update(this.id, this.ruleLibrary).subscribe(
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
    this.ruleLibrary = new Bcf_Rule_Library();
  }

  onSubmit() {
    this.updated = true;
    this.update();
  }

  back() {
    this.router.navigate(["../../all"], { relativeTo: this.route });
  }
}
