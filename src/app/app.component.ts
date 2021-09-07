import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paisesApp';

  menuItems: object[];
  selectedItem?: string;

  constructor() {

    this.menuItems = [
      {name: 'Buscar pais'},
      {name: 'Por Region'},
      {name: 'Por Capital'},
    ];

  }
}
