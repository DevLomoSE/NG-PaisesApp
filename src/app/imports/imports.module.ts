import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ListboxModule} from 'primeng/listbox';
import {MessageModule} from 'primeng/message';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';


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
  ],
})
export class ImportsModule { }
