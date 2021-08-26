import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/api/login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserRegistrationService } from 'src/app/services/api/user-registration.service';

@Component({
	selector   : 's-login-pg',
	templateUrl: './login.component.html',
    styleUrls  : [ './login.scss'],
})

export class LoginComponent implements OnInit {
    model: any = {};
    errMsg:string = '';
    constructor(
        private router: Router,
        private loginService: LoginService,
        private userRegistrationService: UserRegistrationService) { }

    ngOnInit() {
        // reset login status
        this.loginService.logout(false);
        this.userRegistrationService.removeSignedUpUserInfo();
        this.userRegistrationService.removeStoredEmail();
    }

    login() {
        this.loginService.getToken(this.model.email, this.model.password)
            .subscribe(resp => {
                    if (resp.user === undefined || resp.user.token === undefined || resp.user.token === "INVALID" ){
                        this.errMsg = 'Checking Email or password';
                        return;
                    }
                    this.router.navigate([resp.landingPage]);
                },
                (errResponse: HttpErrorResponse) => {
                  switch(errResponse.status) {
                    case 401:
                      this.errMsg = 'Email or password is incorrect';
                      break;
                    case 404:
                      this.errMsg = 'Service not found';
                    case 408:
                      this.errMsg = 'Request Timedout';
                    case 500:
                      this.errMsg = 'Internal Server Error';
                    default:
                      this.errMsg = 'Server Error';
                  }
                }
            );
    }

    onSignUp(){
      this.router.navigate(['signup']);
    }


}
