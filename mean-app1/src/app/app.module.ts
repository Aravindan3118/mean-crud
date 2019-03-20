import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesModule } from './employees/employees.module';
import { CommonService } from './shared/common.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeesModule,
    HttpClientModule,
    BrowserAnimationsModule,ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
