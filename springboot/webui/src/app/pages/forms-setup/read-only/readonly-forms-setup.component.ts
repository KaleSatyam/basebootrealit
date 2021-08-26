import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rn_Forms_Setup } from 'src/app/models/Rn_Forms_Setup';
import { FormSetupService } from 'src/app/services/api/form-setup.service';

@Component({
	selector: 'readonly-forms-setup',
	templateUrl: './readonly-forms-setup.component.html',
    styleUrls: [ './readonly-forms-setup.scss'],
})
export class ReadOnlyFormsSetupComponent implements OnInit {
    basic: boolean = false;
    form_id: number;
    rn_froms_setup: Rn_Forms_Setup;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
         private formSetupService: FormSetupService) { }
    ngOnInit() {
        this.getById();
    }

    getById() {
        this.rn_froms_setup = new Rn_Forms_Setup();
        this.form_id = this.route.snapshot.params['id'];

        this.formSetupService.getById(this.form_id)
            .subscribe(data => {
                console.log(data);
                this.rn_froms_setup = data;
            });
    }

    alertType: string;
    alertMessage: string = "";
    alert = [
      { type: "success", message: "Build Successfully" },
      { type: "danger", message: "Some error Happens" },
    ];

    buildDynamicForm() {
        console.log("buildDynamicForm() Form_id = " + this.form_id);
        if (this.form_id === null) {
            this.alertType = this.alert[1].type;
            this.alertMessage = "form_code is null";
            return;
        }
        this.formSetupService.buildDynamicForm(this.form_id).subscribe(data => {
            console.log("Success Message: ", data);
            this.alertType = this.alert[0].type;
            this.alertMessage = this.alert[0].message;
        }, (err) => {
            console.log("Error Message ", err);
            this.alertType = this.alert[1].type;
            this.alertMessage = this.alert[1].message;
        });

    }



    goToWhoColumns() {
        this.basic = !this.basic;
    }

    back() {
        this.router.navigate(['../../all'], {relativeTo: this.route});
    }
}
