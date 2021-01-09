import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoixComponent } from './choix/choix.component';
import { GrapheComponent } from './graphe/graphe.component';
import { PredictionComponent } from './prediction/prediction.component';
import { AideComponent } from './aide/aide.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {choix_service} from "../services/choix_service";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {JwPaginationComponent, JwPaginationModule} from "jw-angular-pagination";





@NgModule({
  declarations: [
    AppComponent,
    ChoixComponent,
    GrapheComponent,
    PredictionComponent,
    AideComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    JwPaginationModule,


  ],
  providers: [choix_service,],
  bootstrap: [AppComponent]
})
export class AppModule { }
