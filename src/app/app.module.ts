import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { EmployeesComponent } from './employees/employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UsersTableComponent } from './users-table/users-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    EmployeesComponent,
    PageNotFoundComponent,
    HomeComponent,
    UsersComponent,
    UsersTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
