import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductStatsComponent } from './pages/product_stats/product_stats.component';
import { OrderStatsComponent } from './pages/order_stats/order_stats.component';
import { ProductsComponent } from './pages/products/products.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { OrderDetailsComponent } from './pages/order_details/order_details.component';
import { EmployeesComponent } from './pages/employees/employees.component';

import { AuthGuard } from './services/auth_guard.service';
import { PageNotFoundComponent } from './pages/404/page-not-found.component';
import { InstructorComponent } from './pages/instructor/instructor.component';
import { AddInstructorComponent } from './pages/instructor/add-instructor/add-instructor.component';
import { ReadOnlyInstructorComponent } from './pages/instructor/read-only/readonly-instructor.component';
import { EditInstructorComponent } from './pages/instructor/edit/edit-instructor.component';
import { AllInstructorComponent } from './pages/instructor/all/all-instructor.component';

// HEADER LINE FORM
import { UniversityComponent } from './pages/university/university.component';
import { AllTeacherComponent } from './pages/university/teacher/all/all-teacher.component';
import { AddTeacherComponent } from './pages/university/teacher/add/add-teacher.component';
import { EditTeacherComponent } from './pages/university/teacher/edit/edit-teacher.component';
import { ReadOnlyTeacherComponent } from './pages/university/teacher/read-only/readonly-teacher.component';
import { AllStudentComponent } from './pages/university/student/all/all-student.component';
import { AddStudentComponent } from './pages/university/student/add/add-student.component';
import { EditStudentComponent } from './pages/university/student/edit/edit-student.component';
import { ReadOnlyStudentComponent } from './pages/university/student/read-only/readonly-student.component';
import { ExtensionComponent } from './pages/extension/extension.component';
import { AllExtensionComponent } from './pages/extension/all-extension/all-extension.component';
import { AddExtensionComponent } from './pages/extension/add-extension/add-extension.component';
import { ReadOnlyExtensionComponent } from './pages/extension/read-only/readonly-extension.component';
import { EditExtensionComponent } from './pages/extension/edit-extension/edit-extension.component';
import { FormsSetupComponent } from './pages/forms-setup/forms-setup.component';
import { AllFormsSetupComponent } from './pages/forms-setup/all/all-forms-setup.component';
import { AddFormsSetupComponent } from './pages/forms-setup/add/add-forms-setup.component';
import { ReadOnlyFormsSetupComponent } from './pages/forms-setup/read-only/readonly-forms-setup.component';
import { EditFormsSetupComponent } from './pages/forms-setup/edit/edit-forms-setup.component';
import { DynamicFormComponent } from './pages/dynamic-form/dynamic-form.component';
import { EditDynamicFormComponent } from './pages/dynamic-form/edit/edit-dynamic-form.component';
import { ReadOnlyDynamicFormComponent } from './pages/dynamic-form/read-only/read-only-dynamic-form.component';
import { AddDynamicFormComponent } from './pages/dynamic-form/add/add-dynamic-form.component';
import { AllDynamicFormComponent } from './pages/dynamic-form/all/all-dynamic-form.component';
import { MenuRegisterComponent } from './pages/menu-register/menu-register.component';
import { ReadOnlyMenuRegisterComponent } from './pages/menu-register/read-only/readonly-menu-register.component';
import { AllMenuRegisterComponent } from './pages/menu-register/all/all-menu-register.component';
import { AddMenuRegisterComponent } from './pages/menu-register/add/add-menu-register.component';
import { EditMenuRegisterComponent } from './pages/menu-register/edit/edit-menu-register.component';
import { AllFunctionRegisterComponent } from './pages/function-register/all/all-function-register.component';
import { AddFunctionRegisterComponent } from './pages/function-register/add/add-function-register.component';
import { ReadOnlyFunctionRegisterComponent } from './pages/function-register/read-only/readonly-function-register.component';
import { EditFunctionRegisterComponent } from './pages/function-register/edit/edit-function-register.component';
import { FunctionRegisterComponent } from './pages/function-register/function-register.component';
import { MenuGroupComponent } from './pages/menu-group/menu-group.component';
import { AllMenuGroupComponent } from './pages/menu-group/all/all-menu-group.component';
import { AddMenuGroupComponent } from './pages/menu-group/add/add-menu-group.component';
import { ReadOnlyMenuGroupComponent } from './pages/menu-group/read-only/readonly-menu-group.component';
import { EditMenuGroupComponent } from './pages/menu-group/edit/edit-menu-group.component';
import { ForbiddenComponent } from './pages/403/forbidden.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { SocialLoginComponent } from './pages/social-login/social-login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AccountSetupComponent } from './pages/account-setup/account-setup.component';
import { UserProfileSettingsComponent } from './pages/user-profile-settings/user-profile-settings.component';
import { UserAccountComponent } from './pages/user-account/user-account.component';
import { AddOrgUserComponent } from './pages/org-user/add/add-org-user.component';
import { ReadOnlyOrgUserComponent } from './pages/org-user/read-only/readonly-org-user.component';
import { OrgUserComponent } from './pages/org-user/org-user.component';
import { EditOrgUserComponent } from './pages/org-user/edit/edit-org-user.component';
import { AllOrgUserComponent } from './pages/org-user/all/all-org-user.component';
import { PasswordResetComponent } from './pages/password-reset/password-reset.component';
import { RuleLibraryComponent } from './pages/rule-library/rule-library.component';
import { AllRuleLibraryComponent } from './pages/rule-library/all/all-rule-library.component';
import { AddRuleLibraryComponent } from './pages/rule-library/add/add-rule-library.component';
import { ReadonlyRuleLibraryComponent } from './pages/rule-library/readonly/readonly-rule-library.component';
import { EditRuleLibraryComponent } from './pages/rule-library/edit/edit-rule-library.component';
import { ExceptionRuleLibraryComponent } from './pages/exception-rule-library/exception-rule-library.component';
import { AllExceptionRuleLibraryComponent } from './pages/exception-rule-library/all/all-exception-rule-library.component';
import { AddExceptionRuleLibraryComponent } from './pages/exception-rule-library/add/add-exception-rule-library.component';
import { ReadonlyExceptionRuleLibraryComponent } from './pages/exception-rule-library/readonly/readonly-exception-rule-library.component';
import { EditExceptionRuleLibraryComponent } from './pages/exception-rule-library/edit/edit-exception-rule-library.component';
import { TechnologyStackComponent } from './pages/technology-stack/technology-stack.component';
import { AllTechnologyStackComponent } from './pages/technology-stack/all/all-technology-stack.component';
import { AddTechnologyStackComponent } from './pages/technology-stack/add/add-technology-stack.component';
import { ReadonlyTechnologyStackComponent } from './pages/technology-stack/readonly/readonly-technology-stack.component';

import { SalesNewComponent } from './pages/sales-new/sales-new.component';
import { AllComponent } from './pages/sales-new/all/all.component';
import { AddsalesComponent } from './pages/sales-new/addsales/addsales.component';
import { EditComponent } from './pages/sales-new/edit/edit.component';
import { ReadonlyNewComponent } from './pages/sales-new/readonly-new/readonly-new.component';
import { DepartmentNewComponent } from './pages/department-new/department-new.component';
import { AlldepartComponent } from './pages/department-new/alldepart/alldepart.component';
import { AddlinedepartComponent } from './pages/department-new/addlinedepart/addlinedepart.component';
import { ReadonlydepartComponent } from './pages/department-new/readonlydepart/readonlydepart.component';
import { EditdepartComponent } from './pages/department-new/editdepart/editdepart.component';





export const routes: Routes = [
  //Important: The sequence of path is important as the router go over then in sequential manner
  { path: '', redirectTo: '/home/dashboard/order', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [  // Children paths are appended to the parent path
      { path: '', redirectTo: '/home/dashboard/order', pathMatch: 'full', data: [{ selectedHeaderItemIndex: 1, selectedSubNavItemIndex: -1 }] },  // Default path (if no deep path is specified for home component like webui/home then it will by default show ProductsComponent )
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: -1 }],
        children: [
          { path: '', redirectTo: '/home/dashboard/order', pathMatch: 'full' },
          { path: 'order', component: OrderStatsComponent, data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: 0 }] },
          { path: 'product', component: ProductStatsComponent, data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: 1 }] }
        ]
      },
      { path: 'orders', component: OrdersComponent, data: [{ selectedHeaderItemIndex: 1, selectedSubNavItemIndex: -1 }] },
      { path: 'orders/:id', component: OrderDetailsComponent, data: [{ selectedHeaderItemIndex: 1, selectedSubNavItemIndex: -1 }] },
      { path: 'products', component: ProductsComponent, data: [{ selectedHeaderItemIndex: 2, selectedSubNavItemIndex: -1 }] },
      { path: 'customers', component: CustomersComponent, data: [{ selectedHeaderItemIndex: 3, selectedSubNavItemIndex: -1 }] },
      { path: 'employees', component: EmployeesComponent, data: [{ selectedHeaderItemIndex: 4, selectedSubNavItemIndex: -1 }] },

      {
        path: 'department', component: DepartmentNewComponent, data: [{ selectedHeaderItemIndex: 5, selectedSubNavItemIndex: -1 }],
        children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: AlldepartComponent, data: [{ selectedHeaderItemIndex: 5, selectedSubNavItemIndex: -1 }] },
          { path: 'adddept', component: AddlinedepartComponent, data: [{ selectedHeaderItemIndex: 5, selectedSubNavItemIndex: -1 }] },
          { path: 'readdep/:did', component: ReadonlydepartComponent, data: [{ selectedHeaderItemIndex: 5, selectedSubNavItemIndex: -1 }] },
          { path: 'editdep/:did', component: EditdepartComponent, data: [{ selectedHeaderItemIndex: 5, selectedSubNavItemIndex: -1 }] },
        ]
      },


      // Sale new
      {
        path: 'sales-new', component: SalesNewComponent, data: [{ selectedHeaderItemIndex: 5, selectedSubNavItemIndex: -1 }],
        children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: AllComponent, data: [{ selectedHeaderItemIndex: 5, selectedSubNavItemIndex: -1 }] },
          { path: 'addsales', component: AddsalesComponent, data: [{ selectedHeaderItemIndex: 5, selectedSubNavItemIndex: -1 }] },
          { path: 'readsales/:id', component: ReadonlyNewComponent, data: [{ selectedHeaderItemIndex: 5, selectedSubNavItemIndex: -1 }] },
          { path: 'update/:id', component: EditComponent, data: [{ selectedHeaderItemIndex: 5, selectedSubNavItemIndex: -1 }] },
        ]
      },

      // INSTRUCTOR
      {
        path: 'instructors', component: InstructorComponent, data: [{ selectedHeaderItemIndex: 5, selectedSubNavItemIndex: -1 }],
        children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: AllInstructorComponent, data: [{ selectedHeaderItemIndex: 5, selectedSubNavItemIndex: -1 }] },
          { path: 'add', component: AddInstructorComponent, data: [{ selectedHeaderItemIndex: 5, selectedSubNavItemIndex: -1 }] },
          { path: 'edit/:id', component: EditInstructorComponent, data: [{ selectedHeaderItemIndex: 5, selectedSubNavItemIndex: -1 }] },
          { path: 'readonly/:id', component: ReadOnlyInstructorComponent, data: [{ selectedHeaderItemIndex: 5, selectedSubNavItemIndex: -1 }] },
        ]
      },
      // UNIVERSITY
      {
        path: 'university', component: UniversityComponent, data: [{ selectedHeaderItemIndex: 6, selectedSubNavItemIndex: -1 }],
        children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: AllTeacherComponent, data: [{ selectedHeaderItemIndex: 6, selectedSubNavItemIndex: -1 }] },
          { path: 'add', component: AddTeacherComponent, data: [{ selectedHeaderItemIndex: 6, selectedSubNavItemIndex: -1 }] },
          { path: 'readonly/:h_id', component: ReadOnlyTeacherComponent, data: [{ selectedHeaderItemIndex: 6, selectedSubNavItemIndex: -1 }] },
          {
            path: 'edit/:h_id', component: EditTeacherComponent, data: [{ selectedHeaderItemIndex: 6, selectedSubNavItemIndex: -1 }]
            /* ,children : [
              { path: "", redirectTo: "all-line", pathMatch: 'full' },
              { path: "all-line", component: AllStudentComponent },
              { path: "add-line", component: AddStudentComponent },
              { path: "edit-line/:l_id", component: EditStudentComponent },
              { path: "line-details/:l_id", component: ReadOnlyStudentComponent }
            ] */
          },
        ]
      },
      // EXTENSION FIELDS
      // university/add/extension
      {
        path: 'extension', component: ExtensionComponent, data: [{ selectedHeaderItemIndex: 7, selectedSubNavItemIndex: -1 }],
        children: [
          { path: '', redirectTo: '/all', pathMatch: 'full' },
          { path: 'all', component: AllExtensionComponent, data: [{ selectedHeaderItemIndex: 7, selectedSubNavItemIndex: -1 }] },
          { path: 'add', component: AddExtensionComponent, data: [{ selectedHeaderItemIndex: 7, selectedSubNavItemIndex: -1 }] },
          { path: 'readonly/:id', component: ReadOnlyExtensionComponent, data: [{ selectedHeaderItemIndex: 7, selectedSubNavItemIndex: -1 }] },
          { path: 'edit/:id', component: EditExtensionComponent, data: [{ selectedHeaderItemIndex: 7, selectedSubNavItemIndex: -1 }] }
        ]
      },
      // DYNAMIC FORM SETUP START
      {
        path: 'dynamic-form-setup', component: FormsSetupComponent,
        children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: AllFormsSetupComponent },
          { path: 'add', component: AddFormsSetupComponent },
          { path: 'readonly/:id', component: ReadOnlyFormsSetupComponent },
          { path: 'edit/:id', component: EditFormsSetupComponent }
        ]
      },
      // DYNAMIC FORM SETUP END

      // DYNAMIC FORMS START
      {
        path: 'dynamic-form-test1', component: DynamicFormComponent, data: [{ selectedHeaderItemIndex: 9, selectedSubNavItemIndex: -1 }],
        children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: AllDynamicFormComponent, data: [{ selectedHeaderItemIndex: 9, selectedSubNavItemIndex: -1 }] },
          { path: 'add', component: AddDynamicFormComponent, data: [{ selectedHeaderItemIndex: 9, selectedSubNavItemIndex: -1 }] },
          { path: 'readonly/:id', component: ReadOnlyDynamicFormComponent, data: [{ selectedHeaderItemIndex: 9, selectedSubNavItemIndex: -1 }] },
          { path: 'edit/:id', component: EditDynamicFormComponent, data: [{ selectedHeaderItemIndex: 9, selectedSubNavItemIndex: -1 }] },
        ]
      },
      // DYNAMIC FORMS END

      // MENU REGISTER START
      {
        path: 'menu-register', component: MenuRegisterComponent, data: [{ selectedHeaderItemIndex: 10, selectedSubNavItemIndex: -1 }],
        children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: AllMenuRegisterComponent, data: [{ selectedHeaderItemIndex: 10, selectedSubNavItemIndex: -1 }] },
          { path: 'add', component: AddMenuRegisterComponent, data: [{ selectedHeaderItemIndex: 10, selectedSubNavItemIndex: -1 }] },
          { path: 'readonly/:id', component: ReadOnlyMenuRegisterComponent, data: [{ selectedHeaderItemIndex: 10, selectedSubNavItemIndex: -1 }] },
          { path: 'edit/:id', component: EditMenuRegisterComponent, data: [{ selectedHeaderItemIndex: 10, selectedSubNavItemIndex: -1 }] },
        ]
      }, // MENU REGISTER END
      // FUNCTION REGISTER START
      {
        path: 'function-register', component: FunctionRegisterComponent, data: [{ selectedHeaderItemIndex: 11, selectedSubNavItemIndex: -1 }],
        children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: AllFunctionRegisterComponent, data: [{ selectedHeaderItemIndex: 11, selectedSubNavItemIndex: -1 }] },
          { path: 'add', component: AddFunctionRegisterComponent, data: [{ selectedHeaderItemIndex: 11, selectedSubNavItemIndex: -1 }] },
          { path: 'readonly/:id', component: ReadOnlyFunctionRegisterComponent, data: [{ selectedHeaderItemIndex: 11, selectedSubNavItemIndex: -1 }] },
          { path: 'edit/:id', component: EditFunctionRegisterComponent, data: [{ selectedHeaderItemIndex: 11, selectedSubNavItemIndex: -1 }] },
        ]
      }, // FUNCTION REGISTER END
      // MENU GROUP START
      {
        path: 'menu-group', component: MenuGroupComponent, data: [{ selectedHeaderItemIndex: 12, selectedSubNavItemIndex: -1 }],
        children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: AllMenuGroupComponent, data: [{ selectedHeaderItemIndex: 12, selectedSubNavItemIndex: -1 }] },
          { path: 'add', component: AddMenuGroupComponent, data: [{ selectedHeaderItemIndex: 12, selectedSubNavItemIndex: -1 }] },
          { path: 'readonly/:id', component: ReadOnlyMenuGroupComponent, data: [{ selectedHeaderItemIndex: 12, selectedSubNavItemIndex: -1 }] },
          { path: 'edit/:id', component: EditMenuGroupComponent, data: [{ selectedHeaderItemIndex: 12, selectedSubNavItemIndex: -1 }] },
        ]
      },// MENU GROUP END

      { path: 'profile-settings', component: UserProfileSettingsComponent },
      { path: 'user-account', component: UserAccountComponent },
      { path: 'reset-password', component: PasswordResetComponent },

      // ORG-USERS START
      {
        path: 'users', component: OrgUserComponent,
        children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: AllOrgUserComponent },
          { path: 'add', component: AddOrgUserComponent },
          { path: 'readonly/:id', component: ReadOnlyOrgUserComponent },
          { path: 'edit/:id', component: EditOrgUserComponent },
        ]
      }, // ORG-USERS END
      // code extraction start
      // code extraction end

      // Rule Library Start
      {
        path: 'rule-library', component: RuleLibraryComponent,
        children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: AllRuleLibraryComponent },
          { path: 'add', component: AddRuleLibraryComponent },
          { path: 'readonly/:id', component: ReadonlyRuleLibraryComponent },
          { path: 'edit/:id', component: EditRuleLibraryComponent },
        ]
      }, // Rule library END
      // Exception Rule Library Start
      {
        path: 'exception-rule-library', component: ExceptionRuleLibraryComponent,
        children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: AllExceptionRuleLibraryComponent },
          { path: 'add', component: AddExceptionRuleLibraryComponent },
          { path: 'readonly/:id', component: ReadonlyExceptionRuleLibraryComponent },
          { path: 'edit/:id', component: EditExceptionRuleLibraryComponent },
        ]
      }, // Exception Rule library END

      // TECHNOLOGY STACK Start
      {
        path: 'tech-stack', component: TechnologyStackComponent,
        children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: AllTechnologyStackComponent },
          { path: 'add', component: AddTechnologyStackComponent },
          { path: 'readonly/:id', component: ReadonlyTechnologyStackComponent },
          /* { path: 'edit/:id'   , component: EditTechn }, */
        ]
      }, // TECHNOLOGY STACK END

      // PROJECT SETUP AND MODULE SETUP
      // project setup start
      // project setup end
      /* //{path:'actions' , component: ActionsComponent },
      // wireframe start
      { path:'wireframe' , component: WireframeComponent,
        children : [
         { path: ''        , redirectTo: 'all', pathMatch: 'full'},
         { path: 'all'   , component: AllWireframeComponent },
         { path: 'add'   , component: AddWireframeComponent },
         { path: 'readonly/:id'   , component: ReadonlyWireframeComponent },
         { path: 'edit/:id'   , component: EditWireframeComponent }
        ]
      },// wireframe end */

      // Action Builder Start
      // Action Builder END



    ]
  },
  /* { // this will be real structure of profile settings 
    path: 'profile-settings',
    component: UserProfileSettingsComponent,
    canActivate:[AuthGuard],
    children:[  // Children paths are appended to the parent path
        { path: '', redirectTo: '/profile', pathMatch: 'full', data:[{selectedHeaderItemIndex:1, selectedSubNavItemIndex:-1}] }, 
        { path     : 'profile', component: ProfileComponent, data     : [{selectedHeaderItemIndex:0, selectedSubNavItemIndex:-1}]},
        { path: 'notifications'   , component: NotificationComponent     , data:[{selectedHeaderItemIndex:0, selectedSubNavItemIndex:0}]  },
        { path: 'accounts' , component: AccountsComponent   , data:[{selectedHeaderItemIndex:0, selectedSubNavItemIndex:1}]  }
    ]
  }, */
  //{ path: 'profile-settings' , component: UserProfileSettingsComponent , canActivate:[AuthGuard] },     
  //{ path: '', redirectTo: '/create-account', pathMatch: 'full' },
  { path: 'create-account', component: UserRegistrationComponent, data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] },
  { path: 'varify-account', component: SocialLoginComponent, data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] },
  { path: 'signup', component: SignupComponent, data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] },
  { path: 'account-setup', component: AccountSetupComponent, data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] },
  { path: 'login', component: LoginComponent, data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] },
  { path: 'logout', component: LogoutComponent, data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] },
  { path: 'forbidden', component: ForbiddenComponent, data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] },
  { path: '**', component: PageNotFoundComponent, data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] }

];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], //{useHash:true}
  exports: [RouterModule],
  declarations: [PageNotFoundComponent, ForbiddenComponent]
})
export class AppRoutingModule { }
