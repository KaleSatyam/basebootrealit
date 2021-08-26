import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//Third Party Modules
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ClarityModule, ClrIconModule } from "@clr/angular";

//Local App Modules
import { AppRoutingModule } from "./app-routing.module";

// Directives
import { TrackScrollDirective } from "./directives/track_scroll/track_scroll.directive";

// Components
import { BadgeComponent } from "./components/badge/badge.component";
import { LegendComponent } from "./components/legend/legend.component";
import { LogoComponent } from "./components/logo/logo.component";

//Pages  -- Pages too are components, they contain other components
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { LoginComponent } from "./pages/login/login.component";
import { LogoutComponent } from "./pages/logout/logout.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { OrderStatsComponent } from "./pages/order_stats/order_stats.component";
import { ProductStatsComponent } from "./pages/product_stats/product_stats.component";
import { ProductsComponent } from "./pages/products/products.component";
import { CustomersComponent } from "./pages/customers/customers.component";
import { OrdersComponent } from "./pages/orders/orders.component";
import { OrderDetailsComponent } from "./pages/order_details/order_details.component";
import { EmployeesComponent } from "./pages/employees/employees.component";
// HEADER-ONLY FORM
import { InstructorComponent } from "./pages/instructor/instructor.component";
import { AllInstructorComponent } from "./pages/instructor/all/all-instructor.component";
import { AddInstructorComponent } from "./pages/instructor/add-instructor/add-instructor.component";
import { EditInstructorComponent } from "./pages/instructor/edit/edit-instructor.component";
import { ReadOnlyInstructorComponent } from "./pages/instructor/read-only/readonly-instructor.component";

// HEADER-LINE FORM
import { UniversityComponent } from "./pages/university/university.component";
import { AllTeacherComponent } from "./pages/university/teacher/all/all-teacher.component";
import { AddTeacherComponent } from "./pages/university/teacher/add/add-teacher.component";
import { EditTeacherComponent } from "./pages/university/teacher/edit/edit-teacher.component";
import { ReadOnlyTeacherComponent } from "./pages/university/teacher/read-only/readonly-teacher.component";
import { AllStudentComponent } from "./pages/university/student/all/all-student.component";
import { AddStudentComponent } from "./pages/university/student/add/add-student.component";
import { EditStudentComponent } from "./pages/university/student/edit/edit-student.component";
import { ReadOnlyStudentComponent } from "./pages/university/student/read-only/readonly-student.component";

// Services
import { AppConfig } from "./app-config";
import { UserInfoService } from "./services/user-info.service";
import { AuthGuard } from "./services/auth_guard.service";
import { ApiRequestService } from "./services/api/api-request.service";
import { TranslateService } from "./services/api/translate.service";
import { LoginService } from "./services/api/login.service";
import { OrderService } from "./services/api/order.service";
import { ProductService } from "./services/api/product.service";
import { CustomerService } from "./services/api/customer.service";
import { EmployeeService } from "./services/api/employee.service";
import { InstructorService } from "./services/api/rn_instructor.service";
import { TeacherService } from "./services/api/teacher.service";
import { StudentService } from "./services/api/student.service";
import { TeacherAddExtensionComponent } from "./pages/university/teacher/extensions/add-ext/teacher-add-extension.component";
import { ExtensionComponent } from "./pages/extension/extension.component";
import { AllExtensionComponent } from "./pages/extension/all-extension/all-extension.component";
import { EditExtensionComponent } from "./pages/extension/edit-extension/edit-extension.component";
import { AddExtensionComponent } from "./pages/extension/add-extension/add-extension.component";
import { ExtensionService } from "./services/api/extension.service";
import { ReadOnlyExtensionComponent } from "./pages/extension/read-only/readonly-extension.component";
import { TeacherGridExtensionComponent } from "./pages/university/teacher/extensions/grid-ext/teacher-grid-extension.component";
import { TeacherReadonlyExtensionComponent } from "./pages/university/teacher/extensions/readonly-ext/teacher-readonly-extension.component";

import { DynamicFormComponent } from "./pages/dynamic-form/dynamic-form.component";
import { ReadOnlyDynamicFormComponent } from "./pages/dynamic-form/read-only/read-only-dynamic-form.component";
import { AddDynamicFormComponent } from "./pages/dynamic-form/add/add-dynamic-form.component";
import { AllDynamicFormComponent } from "./pages/dynamic-form/all/all-dynamic-form.component";
import { EditDynamicFormComponent } from "./pages/dynamic-form/edit/edit-dynamic-form.component";
import { FormSetupService } from "./services/api/form-setup.service";
import { DynamicTransactionService } from "./services/api/dynamic-transaction.service";
import { FormsSetupComponent } from "./pages/forms-setup/forms-setup.component";
import { AddFormsSetupComponent } from "./pages/forms-setup/add/add-forms-setup.component";
import { AllFormsSetupComponent } from "./pages/forms-setup/all/all-forms-setup.component";
import { ReadOnlyFormsSetupComponent } from "./pages/forms-setup/read-only/readonly-forms-setup.component";
import { EditFormsSetupComponent } from "./pages/forms-setup/edit/edit-forms-setup.component";
import { AddMenuRegisterComponent } from "./pages/menu-register/add/add-menu-register.component";
import { EditMenuRegisterComponent } from "./pages/menu-register/edit/edit-menu-register.component";
import { ReadOnlyMenuRegisterComponent } from "./pages/menu-register/read-only/readonly-menu-register.component";
import { AllMenuRegisterComponent } from "./pages/menu-register/all/all-menu-register.component";
import { MenuRegisterComponent } from "./pages/menu-register/menu-register.component";
import { MenuRegisterService } from "./services/api/menu-register.service";
import { FunctionRegisterService } from "./services/api/function-register.service";
import { FunctionRegisterComponent } from "./pages/function-register/function-register.component";
import { AddFunctionRegisterComponent } from "./pages/function-register/add/add-function-register.component";
import { ReadOnlyFunctionRegisterComponent } from "./pages/function-register/read-only/readonly-function-register.component";
import { EditFunctionRegisterComponent } from "./pages/function-register/edit/edit-function-register.component";
import { AllFunctionRegisterComponent } from "./pages/function-register/all/all-function-register.component";
import { MenuGroupService } from "./services/api/menu-group.service";
import { MenuGroupComponent } from "./pages/menu-group/menu-group.component";
import { AddMenuGroupComponent } from "./pages/menu-group/add/add-menu-group.component";
import { AllMenuGroupComponent } from "./pages/menu-group/all/all-menu-group.component";
import { ReadOnlyMenuGroupComponent } from "./pages/menu-group/read-only/readonly-menu-group.component";
import { EditMenuGroupComponent } from "./pages/menu-group/edit/edit-menu-group.component";
import { RealnetMenuService } from "./services/api/realnet-menu.service";
import { UserRegistrationService } from "./services/api/user-registration.service";
import { UserRegistrationComponent } from "./pages/user-registration/user-registration.component";
import { SocialLoginComponent } from "./pages/social-login/social-login.component";
import { JwtInterceptor } from "./services/jwt.interceptor";
import { SignupComponent } from "./pages/signup/signup.component";
import { AccountSetupComponent } from "./pages/account-setup/account-setup.component";
import { AlertComponent } from "./components/alert/alert.component";
import { AlertService } from "./services/alert.service";
import { UserProfileSettingsComponent } from "./pages/user-profile-settings/user-profile-settings.component";
import { UserProfileService } from "./services/api/user-profile.service";
import { UserAccountComponent } from "./pages/user-account/user-account.component";
import { OrgUserService } from "./services/api/org-user.service";
import { OrgUserComponent } from "./pages/org-user/org-user.component";
import { AddOrgUserComponent } from "./pages/org-user/add/add-org-user.component";
import { AllOrgUserComponent } from "./pages/org-user/all/all-org-user.component";
import { ReadOnlyOrgUserComponent } from "./pages/org-user/read-only/readonly-org-user.component";
import { EditOrgUserComponent } from "./pages/org-user/edit/edit-org-user.component";
import { PasswordResetComponent } from "./pages/password-reset/password-reset.component";
import { TeacherEditExtensionComponent } from "./pages/university/teacher/extensions/edit-ext/teacher-edit-extension.component";

import { RuleLibraryComponent } from "./pages/rule-library/rule-library.component";
import { AddRuleLibraryComponent } from "./pages/rule-library/add/add-rule-library.component";
import { AllRuleLibraryComponent } from "./pages/rule-library/all/all-rule-library.component";
import { ReadonlyRuleLibraryComponent } from "./pages/rule-library/readonly/readonly-rule-library.component";
import { EditRuleLibraryComponent } from "./pages/rule-library/edit/edit-rule-library.component";
import { ExceptionRuleLibraryComponent } from "./pages/exception-rule-library/exception-rule-library.component";
import { AddExceptionRuleLibraryComponent } from "./pages/exception-rule-library/add/add-exception-rule-library.component";
import { AllExceptionRuleLibraryComponent } from "./pages/exception-rule-library/all/all-exception-rule-library.component";
import { ReadonlyExceptionRuleLibraryComponent } from "./pages/exception-rule-library/readonly/readonly-exception-rule-library.component";
import { EditExceptionRuleLibraryComponent } from "./pages/exception-rule-library/edit/edit-exception-rule-library.component";
import { RuleLibraryService } from "./services/api/rule-library.service";
import { ExceptionRuleLibraryService } from "./services/api/exception-rule-library.service";
import { TechnologyStackComponent } from "./pages/technology-stack/technology-stack.component";
import { ReadonlyTechnologyStackComponent } from "./pages/technology-stack/readonly/readonly-technology-stack.component";
import { AddTechnologyStackComponent } from "./pages/technology-stack/add/add-technology-stack.component";
import { TechnologyStackService } from "./services/api/technology-stack.service";
import { AllTechnologyStackComponent } from "./pages/technology-stack/all/all-technology-stack.component";

import { CodemirrorModule } from "@ctrl/ngx-codemirror";

//sale

import { SalesNewComponent } from './pages/sales-new/sales-new.component';
import { AllComponent } from './pages/sales-new/all/all.component';
import { AddsalesComponent } from './pages/sales-new/addsales/addsales.component';
import { EditComponent } from './pages/sales-new/edit/edit.component';
import { ReadonlyNewComponent } from './pages/sales-new/readonly-new/readonly-new.component';

import { NgxMaskModule } from "ngx-mask";
import { DatePipe } from "@angular/common";
import { DepartmentNewComponent } from "./pages/department-new/department-new.component";
import { EditdepartComponent } from "./pages/department-new/editdepart/editdepart.component";
import { ReadonlydepartComponent } from "./pages/department-new/readonlydepart/readonlydepart.component";
import { AddlinedepartComponent } from "./pages/department-new/addlinedepart/addlinedepart.component";
import { AlldepartComponent } from "./pages/department-new/alldepart/alldepart.component";
import { DepartmentService } from "./services/api/department.service";
import { SalesNewService } from "./services/api/sales-new.service";
import { ExtfieldsComponent } from "./pages/department-new/extfields/extfields.component";
import { HeaderextComponent } from "./pages/department-new/extfields/headerext.component";




//import { ErrorInterceptor } from './services/error.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Thirdparty Module
    NgxDatatableModule,
    NgxChartsModule,
    //ClarityModule.forChild(),
    ClarityModule,
    ClrIconModule,
    CodemirrorModule,
    // Local App Modules
    AppRoutingModule,
    NgxMaskModule.forRoot(),
   
  ],

  declarations: [
    // Components
    BadgeComponent,
    LegendComponent,
    LogoComponent,
    //Pages -- Pages too are components, they contain other components
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    ProductStatsComponent,
    OrderStatsComponent,
    ProductsComponent,
    EmployeesComponent,
    CustomersComponent,
    OrdersComponent,
    OrderDetailsComponent,
    // instructor
    InstructorComponent,
    AllInstructorComponent,
    AddInstructorComponent,
    EditInstructorComponent,
    ReadOnlyInstructorComponent,
    // HEADER-LINE COMPONENTS
    UniversityComponent,
    AllTeacherComponent,
    AddTeacherComponent,
    EditTeacherComponent,
    ReadOnlyTeacherComponent,
    AllStudentComponent,
    AddStudentComponent,
    EditStudentComponent,
    ReadOnlyStudentComponent,
    // extensions [TEACHER]
    TeacherAddExtensionComponent,
    TeacherGridExtensionComponent,
    TeacherReadonlyExtensionComponent,
    TeacherEditExtensionComponent,
    //Directives
    TrackScrollDirective,
    // EXTENSION
    ExtensionComponent,
    AllExtensionComponent,
    EditExtensionComponent,
    AddExtensionComponent,
    ReadOnlyExtensionComponent,
    // DYNAMIC FORM COMPONENTS
    DynamicFormComponent,
    AddDynamicFormComponent,
    AllDynamicFormComponent,
    EditDynamicFormComponent,
    ReadOnlyDynamicFormComponent,

    // form setup for dynamic form
    FormsSetupComponent,
    AddFormsSetupComponent,
    AllFormsSetupComponent,
    ReadOnlyFormsSetupComponent,
    EditFormsSetupComponent,
    // menu register
    MenuRegisterComponent,
    AddMenuRegisterComponent,
    AllMenuRegisterComponent,
    ReadOnlyMenuRegisterComponent,
    EditMenuRegisterComponent,
    // function register
    FunctionRegisterComponent,
    AddFunctionRegisterComponent,
    AllFunctionRegisterComponent,
    ReadOnlyFunctionRegisterComponent,
    EditFunctionRegisterComponent,
    // menu group component
    MenuGroupComponent,
    AddMenuGroupComponent,
    AllMenuGroupComponent,
    ReadOnlyMenuGroupComponent,
    EditMenuGroupComponent,
    // user registration
    UserRegistrationComponent,
    SocialLoginComponent,
    SignupComponent,
    AccountSetupComponent,
    AlertComponent,
    UserProfileSettingsComponent,
    UserAccountComponent,
    // users by admin
    OrgUserComponent,
    AddOrgUserComponent,
    AllOrgUserComponent,
    ReadOnlyOrgUserComponent,
    EditOrgUserComponent,
    PasswordResetComponent,
    // code extraction component start

    RuleLibraryComponent, // rule library start
    AddRuleLibraryComponent,
    AllRuleLibraryComponent,
    ReadonlyRuleLibraryComponent,
    EditRuleLibraryComponent,
    ExceptionRuleLibraryComponent,
    AddExceptionRuleLibraryComponent,
    AllExceptionRuleLibraryComponent,
    ReadonlyExceptionRuleLibraryComponent,
    EditExceptionRuleLibraryComponent,
    TechnologyStackComponent,
    AllTechnologyStackComponent,
    ReadonlyTechnologyStackComponent,
    AddTechnologyStackComponent,
  
    SalesNewComponent,
    AllComponent,
    AddsalesComponent,
    EditComponent,
    ReadonlyNewComponent,

    DepartmentNewComponent,
    EditdepartComponent,
    ReadonlydepartComponent,
    AddlinedepartComponent,
    AlldepartComponent,
    // action builder,
    ExtfieldsComponent,
    HeaderextComponent,
    
   
    
  
  ],

  providers: [
    AuthGuard,
    UserInfoService,
    TranslateService,
    ApiRequestService,
    LoginService,
    RealnetMenuService, // responsible for side nav
    OrderService,
    ProductService,
    CustomerService,
    EmployeeService,
    InstructorService,
    TeacherService,
    StudentService,
    AppConfig,
    ExtensionService,
    FormSetupService,
    DynamicTransactionService,
    MenuRegisterService,
    FunctionRegisterService,
    MenuGroupService,
    UserRegistrationService,
    AlertService,
    UserProfileService,
    OrgUserService,
    RuleLibraryService,
    ExceptionRuleLibraryService,
    TechnologyStackService,
    DatePipe,
    DepartmentService,
    SalesNewService,


    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
