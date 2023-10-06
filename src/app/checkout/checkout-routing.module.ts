import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutPage } from './checkout.page';
import { EventDetailsPage } from '../event-details/event-details.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutPage
  },
  {
    // path:'checkout/:id/',
    // component: EventDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutPageRoutingModule {}
