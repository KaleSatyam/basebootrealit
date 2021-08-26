import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuRegister } from 'src/app/models/MenuRegister';
import { MenuRegisterService } from 'src/app/services/api/menu-register.service';

@Component({
	selector: 'readonly-menu-register',
	templateUrl: './readonly-menu-register.component.html',
    styleUrls: [ './readonly-menu-register.scss'],
})
export class ReadOnlyMenuRegisterComponent implements OnInit {
    basic: boolean = false;
    id: number;
    menu: MenuRegister;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private menuRegisterService: MenuRegisterService
    ) { }

    ngOnInit() {
        this.getById();
    }

    getById() {
        this.menu = new MenuRegister();
        this.id = this.route.snapshot.params['id'];

        this.menuRegisterService.getById(this.id)
            .subscribe(data => {
                console.log(data);
                this.menu = data;
            });
    }

    goToWhoColumns() {
        this.basic = !this.basic;
    }

    back() {
        this.router.navigate(['../../all'], {relativeTo: this.route});
    }
}
