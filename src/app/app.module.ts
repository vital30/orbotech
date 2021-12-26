import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeftPanelComponent } from './home/left-panel/left-panel.component';
import { TopPanelComponent } from './home/left-panel/top-panel/top-panel.component';
import { BottomPanelComponent } from './home/left-panel/bottom-panel/bottom-panel.component';
import {HttpClientModule} from '@angular/common/http';
import {DatabaseBarService} from "./_services/database-bar.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftPanelComponent,
    TopPanelComponent,
    BottomPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DatabaseBarService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
