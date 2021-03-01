import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppCssComponent } from './css/css.component';
import { AppMainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: AppMainComponent },
  { path: 'css', component: AppCssComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    AppCssComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
