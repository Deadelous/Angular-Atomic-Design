import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { AtomComponent } from './pages/atom/atom.component';
import { MoleculeComponent } from './pages/molecule/molecule.component';
import { AtomicsComponent } from './pages/atomics/atomics.component';

import { SharedModule } from './shared/shared.module';
import { AtomicdetailComponent } from './pages/atomicdetail/atomicdetail.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AtomComponent,
    MoleculeComponent,
    AtomicsComponent,
    AtomicdetailComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
