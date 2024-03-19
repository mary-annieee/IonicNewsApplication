import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewspagePageRoutingModule } from './newspage-routing.module';

import { NewspagePage } from './newspage.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewspagePageRoutingModule
  ],
  declarations: [NewspagePage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class NewspagePageModule {}
