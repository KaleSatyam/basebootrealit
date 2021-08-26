import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionRegister } from 'src/app/models/FunctionRegister';
import { FunctionRegisterService } from 'src/app/services/api/function-register.service';
import { MenuRegisterService } from 'src/app/services/api/menu-register.service';

@Component({
	selector: 'readonly-function-register',
	templateUrl: './readonly-function-register.component.html',
    styleUrls: [ './readonly-function-register.scss'],
})
export class ReadOnlyFunctionRegisterComponent implements OnInit {
    basic: boolean = false;
    id: number;
    functionRegister: FunctionRegister;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private functionRegisterService: FunctionRegisterService
    ) { }

    ngOnInit() {
        this.getById();
    }

    getById() {
        this.functionRegister = new FunctionRegister();
        this.id = this.route.snapshot.params['id'];

        this.functionRegisterService.getById(this.id)
            .subscribe(data => {
                console.log(data);
                this.functionRegister = data;
            });
    }

    goToWhoColumns() {
        this.basic = !this.basic;
    }

    back() {
        this.router.navigate(['../../all'], {relativeTo: this.route});
    }
}
