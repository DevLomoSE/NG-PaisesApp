import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent implements OnInit {

  public paises: Country[];
  public termino: string;
  public errorFlag: boolean;
  public placeholder: string;

  private route = '/capital';

  constructor(
    private paisService: PaisService
  ) {
    this.errorFlag = false;
    this.termino = '';
    this.paises = [];
    this.placeholder = 'Buscar capital...';
  }

  ngOnInit(): void {
  }

  search( termino: any ): void{
    console.clear();
    this.termino = termino;
    if (this.termino != null){
      this.errorFlag = false;
      this.paises = [];
      this.paisService.buscarCapital(this.termino)
                      .subscribe(
                        response => {
                          response.forEach( (item, index) => {
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

  sugerencias( event: any): void{
    this.errorFlag = false;
  }

}
