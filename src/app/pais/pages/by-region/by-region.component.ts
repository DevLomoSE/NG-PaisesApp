import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent implements OnInit {

  private route = '/region';

  public region: string;
  public paises: Country[];
  public errorFlag: boolean;
  public regiones = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public regionActiva: string;

  constructor(
    private paisService: PaisService
  ) {
    this.errorFlag = false;
    this.region = '';
    this.paises = [];
    this.regionActiva = '';
  }

  ngOnInit(): void {
  }

  activarRegion( region: string ): void{
    this.regionActiva = region;
    if (region === this.region){
      return;
    }
    this.paises = [];
    this.search(region);
  }

  mutateClassCSS( region: string): string{
    return ( region === this.regionActiva ) ? 'p-button-outlined text-white' : '';
  }

  search( termino: string ): void{
    console.clear();
    this.region = termino;
    if (this.region != null){
      this.errorFlag = false;
      this.paises = [];
      this.paisService.buscarRegion(this.region)
                      .subscribe(
                        response => {
                          response.forEach((item, index) => {
                            item.id = ++index;
                            this.paises.push(item);
                          });
                        },
                        error => {
                          this.errorFlag = true;
                          this.paises = [];
                          console.log(error);
                        }
                      );
    }
  }

}
