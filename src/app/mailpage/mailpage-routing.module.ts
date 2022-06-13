import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailpagePage } from './mailpage.page';

const routes: Routes = [
  {
    path: '',
    component: MailpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MailpagePageRoutingModule {}
