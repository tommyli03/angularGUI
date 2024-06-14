import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { StartComponent } from './start/start.component';
import { ResultsComponent } from './results/results.component';

export const routes: Routes =
[ {path: '', component: HomepageComponent},
  {path: 'start', component: StartComponent},
  {path: 'results', component: ResultsComponent}
 ];
