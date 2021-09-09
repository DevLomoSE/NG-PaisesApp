import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent implements OnInit {

  private route = '/region';

  regiones = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string;

  constructor() { 
    this.regionActiva = '';
  }

  ngOnInit(): void {
  }

  activarRegion( region: string ): void{
    this.regionActiva = region;
  }

  mutateClassCSS( region: string): string{
    return ( region === this.regionActiva ) ? 'p-button-outlined text-white' : '';
  }

}
