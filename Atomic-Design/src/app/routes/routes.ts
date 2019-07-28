import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AtomComponent } from '../pages/atom/atom.component';
import { MoleculeComponent } from '../pages/molecule/molecule.component';
import { OrganismComponent } from '../pages/organism/organism.component';
import {AtomicdetailComponent} from '../pages/atomicdetail/atomicdetail.component';

export const appRoutes: Routes = [
   {path: 'home', component: HomeComponent},
   {path: 'atoms', component: AtomComponent},
   {path: 'molecules', component: MoleculeComponent},
   {path: 'organisms', component: OrganismComponent},
   {path: 'atomics/:id', component: AtomicdetailComponent},
   {path: '', redirectTo: '/home', pathMatch: 'full'}
];
