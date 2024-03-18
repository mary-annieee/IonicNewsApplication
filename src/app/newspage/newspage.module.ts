import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewspagePageRoutingModule } from './newspage-routing.module';

import { NewspagePage } from './newspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewspagePageRoutingModule
  ],
  declarations: [NewspagePage]
})
export class NewspagePageModule {}
