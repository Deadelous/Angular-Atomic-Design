import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AtomComponent } from '../pages/atom/atom.component';
import { MoleculeComponent } from '../pages/molecule/molecule.component';
import { AtomicsComponent } from '../pages/atomics/atomics.component';
import {AtomicdetailComponent} from '../pages/atomicdetail/atomicdetail.component';
import {ContactComponent} from '../pages/contact/contact.component';

export const appRoutes: Routes = [
   {path: 'home', component: HomeComponent},
   {path: 'atoms', component: AtomComponent},
   {path: 'molecules', component: MoleculeComponent},
   {path: 'atomics', component: AtomicsComponent},
   {path: 'atomics/:id', component: AtomicdetailComponent},
  {path: 'contact', component: ContactComponent},
   {path: '', redirectTo: '/home', pathMatch: 'full'}
];
