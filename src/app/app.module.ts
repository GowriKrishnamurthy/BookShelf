import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';
import { BookModule } from './books/book.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'error', component: ErrorComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    AppRoutingModule,
    BookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
