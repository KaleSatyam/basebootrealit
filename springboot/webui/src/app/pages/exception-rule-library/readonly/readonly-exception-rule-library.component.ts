import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Bcf_Exception_Rule_Library } from "src/app/models/Bcf_Exception_Rule_Library";
import { ExceptionRuleLibraryService } from "src/app/services/api/exception-rule-library.service";

@Component({
  selector: "app-readonly-exception-rule-library",
  templateUrl: "./readonly-exception-rule-library.component.html",
  styleUrls: ["./readonly-exception-rule-library.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ReadonlyExceptionRuleLibraryComponent implements OnInit {
  basic: boolean = false;
  id: number;
  exceptionRuleLibrary: Bcf_Exception_Rule_Library;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private exceptionRuleLibraryService: ExceptionRuleLibraryService
  ) {}

  ngOnInit() {
    this.getById();
  }

  getById() {
    this.exceptionRuleLibrary = new Bcf_Exception_Rule_Library();
    this.id = this.route.snapshot.params["id"];

    this.exceptionRuleLibraryService.getById(this.id).subscribe((data) => {
      console.log(data);
      this.exceptionRuleLibrary = data;
    });
  }

  goToWhoColumns() {
    this.basic = !this.basic;
  }

  back() {
    this.router.navigate(["../../all"], { relativeTo: this.route });
  }
}
