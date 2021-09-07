import { unsupported } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-by-pais',
  templateUrl: './by-pais.component.html',
  styleUrls: ['./by-pais.component.css']
})
export class ByPaisComponent implements OnInit {

  paises: object[];
  termino: string = '';

  constructor() {

    this.paises = [
      { code: '32435', flag: 'none', name: 'Arandas', poblation: '53', action: 'ver' },
    ];
   }

  ngOnInit(): void {
  }

  search(): void{
    console.log(this.termino);
  }

}
