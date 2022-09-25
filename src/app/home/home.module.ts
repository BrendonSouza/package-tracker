import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

import { RastreioComponent } from './components/rastreio/rastreio.component';
import { faCheck, faCheckDouble, faClose, faEllipsis, faSearch, faTruck, faTruckFast, faTruckRampBox, faWarning } from '@fortawesome/free-solid-svg-icons';
import { MatRippleModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { ErroDialogComponent } from './components/erro-dialog/erro-dialog.component';
@NgModule({
  declarations: [HomeComponent, RastreioComponent, ErroDialogComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FontAwesomeModule,
    MatBadgeModule,
    MatRippleModule,
    MatDialogModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faSearch,
      faCheck,
      faTruckRampBox,
      faTruckFast,
      faTruck,
      faWarning,
      faClose,
      faEllipsis
    );
  }
}
