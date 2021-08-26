import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidationError } from 'src/app/models/ValidationError';
import { RuleLibraryService } from 'src/app/services/api/rule-library.service';

@Component({
  selector: 'app-add-rule-library',
  templateUrl: './add-rule-library.component.html',
  styleUrls: ['./add-rule-library.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AddRuleLibraryComponent implements OnInit {
  public entryForm: FormGroup;
  submitted = false;
  basic: boolean = false;
  errorMsg: ValidationError[] = []; // backend validation field error message

  tech_stack_key = ['aspmy', 'sphmy'];
  tech_stacks = ['SpringMVC-Hibernate-Mysql', 'Angular-SpringBoot-Mysql', 'React-ReactNative-Mysql', 'React-ReactNative-MongoDB', 'Angular-SpringBoot-MongoDB', 'Php-Laravel-Mysql', 'MEAN'];
  object_types = ['form', 'bi', 'report', 'api'];
  sub_object_types = ['only header', 'only line', 'header line', 'header multiline', 'wrokflow', 'setup', 'std report', 'bi report', 'rest api'];


  

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private ruleLibraryService: RuleLibraryService,
  ) {}


  ngOnInit() {
    this.entryForm = this._fb.group({
      tech_stack: [null],
      object_type: [null],
      sub_object_type: [null],
      rule_name: [null],
      rule_type: [null],
      identifier_start_string: [null],
      identifier_end_string: [null],
      replacement_string: [null],
      file_code: [null],
      group_id: [null],
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
    this.ruleLibraryService.save(this.entryForm.value).subscribe(
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
