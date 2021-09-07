import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByPaisComponent } from './pages/by-pais/by-pais.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { ImportsModule } from '../imports/imports.module';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByPaisComponent,
    ByRegionComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    ImportsModule
  ],
  exports: [
    ByCapitalComponent,
    ByPaisComponent,
    ByRegionComponent,
    VerPaisComponent
  ]
})
export class PaisModule { }
