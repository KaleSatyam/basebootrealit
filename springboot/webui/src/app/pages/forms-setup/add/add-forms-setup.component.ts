import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mapping } from 'src/app/models/Mapping';
import { ValidationError } from 'src/app/models/ValidationError';
import { FormSetupService } from 'src/app/services/api/form-setup.service';
@Component({
  selector: 'app-add-forms-setup',
  templateUrl: './add-forms-setup.component.html',
  styleUrls: ['./add-forms-setup.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AddFormsSetupComponent implements OnInit {

  public entryForm: FormGroup;
  submitted = false;
  basic: boolean = false;

  fieldErrors: ValidationError[] = [];

  related_to = ['Menu', 'Related To'];
  page_event = ['OnClick', 'OnBlur'];
  field_type = ['textfield', 
          'dropdown',
          'date',
          'checkbox',
           'textarea', 
          'togglebutton',
          'url',
          'autocomplete',
          'phonemasked',
          'currency',
          'email',
          'passwordmasked'
];
/*   mapping = ['comp1', 'comp2', 'comp3', 'comp4', 'comp5', 'comp6', 'comp7', 'comp8', 'comp9',
              'comp10', 'comp11', 'comp12', 'comp13', 'comp14', 'comp15', 'comp16', 'comp17',  	
              'comp18', 'comp19', 'comp20', 'comp21', 'comp22', 'comp23', 'comp24', 'comp25', 
              'comp_l26', 'comp_l27', 'comp_l28', 'comp_l29', 'comp_l30']; */
  mappings: Mapping[];

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private formsSetupService: FormSetupService,
    private httpService: HttpClient
  ) {}
  ngOnInit() {
    this.getMapings();
    //this.storage.setItem(this.key, this.formCode);
    this.entryForm = this._fb.group({
      form_name: [null],
      form_desc: [null],
      related_to: [null],
      page_event: [null],
      button_caption: [null],
      components: this._fb.array([this.initLinesForm()]),
    });
  }

  getMapings() {
    this.httpService
      .get<Mapping[]>('./assets/json/form-setup-mapping.json')
      .subscribe(data => {
        console.log(data);
        this.mappings = data;
        }, err => console.log(err)
      )
  }

  initLinesForm() {
    return this._fb.group({
      label: [null],
      type: [null],
      mapping: [null],
      mandatory: [null],
      readonly: [null],
      drop_values: [null],
      sp: [null],
    });
  }

  get controls() {
    return (this.entryForm.get("components") as FormArray).controls;
  }

  onAddLines() {
    (<FormArray>this.entryForm.get("components")).push(this.initLinesForm());
  }

  onRemoveLines(index: number) {
    (<FormArray>this.entryForm.get("components")).removeAt(index);
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
    this.fieldErrors = [];
    this.formsSetupService.create(this.entryForm.value).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(["../all"], { relativeTo: this.route });
      },
      (error) => {
        console.log(error); 
        const objectArray = Object.entries(error.error.fieldErrors);
        objectArray.forEach(([k, v]) => {
          console.log(k);
          console.log(v);
          this.fieldErrors.push({ field: k, message: v });
        });
        console.log(this.fieldErrors); // this will come from backend
      }
    );
  }
  extensionBuild() {
    this.basic = !this.basic;
    console.log("button status: ", this.basic);
  }

  goToExt() {
    this.router.navigate(['extension/all'], { relativeTo: this.route });
  }

}
