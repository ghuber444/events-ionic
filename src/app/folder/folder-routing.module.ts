import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { CheckoutPage } from '../checkout/checkout.page';
import { EventDetailsPage } from '../event-details/event-details.page';
import { EventDetailsPageModule } from '../event-details/event-details.module';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path:'checkout/:id',
    component: CheckoutPage,
    // children: [
    //   {
    //     path: 'event-details/:id',
    //     component: EventDetailsPage
    //   }
    // ]
  },
  {
    path:'checkout/:id/event-details/:id',
    component: EventDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), EventDetailsPageModule],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
