import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: object[];
  selectedItem?: string;

  constructor() {

    this.menuItems = [
      {name: 'Buscar pais', route: ''},
      {name: 'Por Region', route: '/region'},
      {name: 'Por Capital', route: '/capital'},
    ];

    this.selectedItem = this.selectedItem;

  }

  ngOnInit(): void {
  }

}
