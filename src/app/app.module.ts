import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BHeaderComponent } from './commonUI/b-header/b-header.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BHeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
