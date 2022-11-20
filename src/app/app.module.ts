import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { EmployeesFacesComponentModule } from './ui/employees-faces/employees-faces.component-module';
import { EmployeeProjectComponentModule } from './ui/employee-project/employee-project.component-module';
import { ProjectServiceModule } from './services/project.service-module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeServiceModule,
    EmployeeListComponentModule,
    EmployeesFacesComponentModule,
    EmployeeProjectComponentModule,
    ProjectServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
