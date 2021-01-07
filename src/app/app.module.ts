import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoixComponent } from './choix/choix.component';
import { GrapheComponent } from './graphe/graphe.component';
import { PredictionComponent } from './prediction/prediction.component';
import { AideComponent } from './aide/aide.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoixComponent,
    GrapheComponent,
    PredictionComponent,
    AideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
