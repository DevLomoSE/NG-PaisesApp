import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ListboxModule} from 'primeng/listbox';
import {MessageModule} from 'primeng/message';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {SkeletonModule} from 'primeng/skeleton';
import {BadgeModule} from 'primeng/badge';
import {ScrollTopModule} from 'primeng/scrolltop';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    ListboxModule,
    InputTextModule,
    CardModule,
    MessageModule,
    TableModule,
    ButtonModule,
    SkeletonModule,
    BadgeModule,
    ScrollTopModule,
  ],
})
export class ImportsModule { }
