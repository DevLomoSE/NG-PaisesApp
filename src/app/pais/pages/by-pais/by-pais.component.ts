import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-by-pais',
  templateUrl: './by-pais.component.html',
  styleUrls: ['./by-pais.component.css']
})
export class ByPaisComponent implements OnInit {

  paises: Country[];
  termino: string;
  errorFlag: boolean;

  constructor(
    private paisService: PaisService
  ) {

    this.errorFlag = false;
    this.termino = '';
    this.paises = [];

   }

  ngOnInit(): void {
  }

  search( termino: string ): void{
    console.clear();
    this.termino = termino;
    if (this.termino != null){
      this.errorFlag = false;
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

}
