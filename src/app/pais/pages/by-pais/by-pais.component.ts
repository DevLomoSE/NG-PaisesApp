import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-by-pais',
  templateUrl: './by-pais.component.html',
  styleUrls: ['./by-pais.component.css']
})
export class ByPaisComponent implements OnInit {

  public paises: Country[];
  public paisesSugeridos: Country[];
  public termino: string;
  public errorFlag: boolean;
  public sugerenciasFlag: boolean;
  public placeholder: string;

  private route = '';

  constructor(
    private paisService: PaisService
  ) {

    this.errorFlag = false;
    this.sugerenciasFlag = false;
    this.termino = '';
    this.paises = [];
    this.paisesSugeridos = [];
    this.placeholder = 'Buscar pais...';

   }

  ngOnInit(): void {
  }

  search( termino: string ): void{
    console.clear();
    this.termino = termino;
    if (this.termino != null){
      this.errorFlag = false;
      this.sugerenciasFlag = false;
      this.paises = [];
      this.paisService.buscarPais(this.termino)
                      .subscribe(
                        response => {
                          // console.log(response);
                          response.forEach((item, index) => {
                            // console.log(item);
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

  sugerencias( termino: any): void{
    this.errorFlag = false;
    this.sugerenciasFlag = true;

    this.termino = termino;

    this.paisService.buscarPais(termino).subscribe( paises => {
      this.paisesSugeridos = paises.splice(0,10);
    });
  }

  searchSugerido( termino: string){
    this.search(termino);
  }

}
