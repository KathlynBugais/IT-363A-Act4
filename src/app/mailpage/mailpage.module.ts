import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MailpagePageRoutingModule } from './mailpage-routing.module';

import { MailpagePage } from './mailpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MailpagePageRoutingModule
  ],
  declarations: [MailpagePage]
})
export class MailpagePageModule {}
