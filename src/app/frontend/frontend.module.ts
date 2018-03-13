import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FrontendComponent } from './frontend.component';
import { FrontendRoutingModule } from './frontend-routing.module';

@NgModule({
  imports: [CommonModule, FrontendRoutingModule],
  declarations: [FrontendComponent],
  providers: []
})
export class FrontendModule {}
