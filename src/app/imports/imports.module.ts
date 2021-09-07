import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ListboxModule} from 'primeng/listbox';


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
  ],
})
export class ImportsModule { }
