import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './services/api/login.service';
import { UserInfoService } from './services/user-info.service';

/* import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap'; */
import { RealnetMenuService } from './services/api/realnet-menu.service';
import { Rn_Main_Menu } from './models/Rn_Main_Menu';
import { MenuGroupService } from './services/api/menu-group.service';


@Component({
    selector: 'home-comp',
    templateUrl: './home.component.html',
    styleUrls: ['./home.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
    public showAppAlert: boolean = false;
    public appHeaderItems = [
        {
            label: 'Dashboard', href: '/home/dashboard',
            subNav: [
                { label: "Order Stats", href: "/home/dashboard/order" },
                { label: "Product Stats", href: "/home/dashboard/product" }
            ]
        },
        { label: 'Orders', href: '/home/orders', subNav: [] },
        { label: 'Products', href: '/home/products', subNav: [] },
        { label: 'Customers', href: '/home/customers', subNav: [] },
        { label: 'Employees', href: '/home/employees', subNav: [] },
        //{ label: 'Dynamic Form', href: '/home/dynamic-form-setup' , subNav: []},
        //{ label: 'Menu Register', href: '/home/menu-register', subNav: []},
        //{ label: 'Function Register', href: '/home/function-register', subNav: []},
        //{ label: 'Menu Group', href: '/home/menu-group', subNav: []},
        { label: 'Instructors', href: '/home/instructors', subNav: [] },
        { label: 'University', href: '/home/university', subNav: [] },
        { label: 'Sales', href: '/home/sales-new', subNav: [] },
        { label: 'Department', href: '/home/department', subNav: [] }

    ];
    // Nil
    /*  public selectedHeaderItemIndex:number=0;
     public selectedSubNavItemIndex:number=1; */
    public userName: string = "";

    constructor(
        private router: Router,
        private activeRoute: ActivatedRoute,
        private loginService: LoginService,
        private userInfoService: UserInfoService,
        private realnetMenuService: RealnetMenuService,
        private menuGroupService: MenuGroupService
    ) {
        // This block is to retrieve the data from the routes (routes are defined in app-routing.module.ts)
        // Nil
        /* router.events
        .filter(event => event instanceof NavigationEnd)
        .map( _ => this.router.routerState.root)
        .map(route => {
            while (route.firstChild) route = route.firstChild;;
            return route;
        })
        .mergeMap( route => route.data)
        .subscribe(data => {
            console.log("Route data===: ", data[0]);
            this.selectedHeaderItemIndex = data[0]?data[0].selectedHeaderItemIndex:-1;
            this.selectedSubNavItemIndex = data[0]?data[0].selectedSubNavItemIndex:-1;
        }); */
        this.userName = this.userInfoService.getUserName();

    }
    user_name: any;
    menus: Rn_Main_Menu[];
    ngOnInit() {
        this.user_name = this.userInfoService.getUserName();
        console.log('user id: ' + this.user_name);
        //this.loadMenuByAccountId();
        this.loadMenuByMenuGroup();
    }

    // side nav menu-sub_menu
    loadMenuByAccountId() {
        this.realnetMenuService.getByAccountId().subscribe(resp => {
            this.menus = resp;
            console.log('menu: ', this.menus);
        });
    }

    loadMenuByMenuGroup() {
        this.menuGroupService.getByCurrentUserMenuGroupId().subscribe(resp => {
            this.menus = resp;
            console.log('menus: ', this.menus);
        })
    }


    /*  menuGroup: Rn_Menu_Group_Header[];
     menu_id: number;
     loadMenuGroupData() {
         this.menuGroupService.getAll().subscribe(resp => {
             this.menuGroup = resp;
             this.menu_id = this.menuGroup
         });
     } */





    navbarSelectionChange(val) {
        // console.log(val);
    }

    closeAppAlert() {
        this.showAppAlert = false;
    }

    isDisabled(input: string): boolean {
        if (input === null) {
            return true;
        } else false;
    }

}
