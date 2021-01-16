import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChoixComponent} from "./choix/choix.component";
import {PredictionComponent} from "./prediction/prediction.component";
import {GrapheComponent} from "./graphe/graphe.component";
import {AideComponent} from "./aide/aide.component";
import {MLComponent} from "./ml/ml.component";

const routes: Routes = [

  {path: 'choix', component: ChoixComponent},
  {path: 'graphe', component: GrapheComponent},
  {path: 'prediction', component: PredictionComponent},
  {path: 'aide', component: AideComponent},
  {path: 'ML', component: MLComponent},
  {path: '', redirectTo:'/choix', pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
