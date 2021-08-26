import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mapping } from 'src/app/models/Mapping';
import { FormSetupService } from 'src/app/services/api/form-setup.service';
import { MenuGroupService } from 'src/app/services/api/menu-group.service';
import { MenuRegisterService } from 'src/app/services/api/menu-register.service';
@Component({
  selector: 'app-add-menu-group',
  templateUrl: './add-menu-group.component.html',
  styleUrls: ['./add-menu-group.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AddMenuGroupComponent implements OnInit {

  public entryForm: FormGroup;
  submitted = false;
  basic: boolean = false;  
  types = ['user', 'admin', 'mis report', 'bi report'];


  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private menuRegisterService: MenuRegisterService,
    private menuGroupService: MenuGroupService
  ) {}
  ngOnInit() {
    this.getTodayDate();
    this.getMenuData();
    this.entryForm = this._fb.group({
      menu_name: [null],
      description: [null],
      active: [null],
      start_date: [null],
      end_date: [null],
      menu_group_lines: this._fb.array([this.initLinesForm()]),
    });
  }

  initLinesForm() {
    return this._fb.group({
      //name: [null],
      active: [null],
      start_date: [null],
      end_date: [null],
      menu_id: [null],
      seq: [null],
      type: [null],
    });
  }

  get controls() {
    return (this.entryForm.get("menu_group_lines") as FormArray).controls;
  }

  onAddLines() {
    (<FormArray>this.entryForm.get("menu_group_lines")).push(this.initLinesForm());
  }

  onRemoveLines(index: number) {
    (<FormArray>this.entryForm.get("menu_group_lines")).removeAt(index);
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
    //this.errorMsg = [];
    this.menuGroupService.create(this.entryForm.value).subscribe(
      (resp) => {
        this.router.navigate(["../all"], { relativeTo: this.route });
      },
      (error) => { console.log(error); }
    );
  }

  menuData: any[];
  menuDropDown: any[];
  getMenuData() {
    //this.menuRegisterService.getAll().subscribe((data) => {
    this.menuRegisterService.getByAccountId().subscribe((data) => {
      this.menuData = data;
      console.log('Menu List by Account Id : ', this.menuData);
      const keys = this.menuData.map((item) => {
        const container = {id: '', name: ''};
        container.id = item.id;
        container.name = item.main_menu_name;
          return container;
        });
        console.log('Menu dropdown: ', keys);
        this.menuDropDown = keys;
      }, (err) => {
        console.log(err)
      }
    );
  }

  today_date: string;
  getTodayDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const date_string = year + '-' + month + '-' + day;
    console.log(date_string);
    this.today_date = date_string; 
  }

  

}
