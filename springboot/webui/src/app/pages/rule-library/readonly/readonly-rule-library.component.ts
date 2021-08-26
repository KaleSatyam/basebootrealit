import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Bcf_Rule_Library } from "src/app/models/Bcf_Rule_Library";
import { RuleLibraryService } from "src/app/services/api/rule-library.service";

@Component({
  selector: "app-readonly-rule-library",
  templateUrl: "./readonly-rule-library.component.html",
  styleUrls: ["./readonly-rule-library.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ReadonlyRuleLibraryComponent implements OnInit {
  basic: boolean = false;
  id: number;
  ruleLibrary: Bcf_Rule_Library;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ruleLibraryService: RuleLibraryService
  ) {}

  ngOnInit() {
    this.getById();
  }

  getById() {
    this.ruleLibrary = new Bcf_Rule_Library();
    this.id = this.route.snapshot.params["id"];

    this.ruleLibraryService.getById(this.id).subscribe((data) => {
      console.log(data);
      this.ruleLibrary = data;
    });
  }

  goToWhoColumns() {
    this.basic = !this.basic;
  }

  back() {
    this.router.navigate(["../../all"], { relativeTo: this.route });
  }
}
