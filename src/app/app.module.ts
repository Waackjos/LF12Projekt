import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { SpinnerComponent } from './components/ui-elements/spinner/spinner.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NavbarComponent } from './components/ui-elements/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    SpinnerComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
