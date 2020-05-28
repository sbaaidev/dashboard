import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
menueitem=[
  {
      name: 'Gestion des plats',
      path: '/plat'
  },
  {
      name: 'Gestion des tables',
      path: '/table'
  },
  {
    name: 'Gestion des serveurs',
    path: '/serveur'
},
  {
    name: 'Gestion des Categories',
    path: '/category'
  }
];
  constructor() { }


  ngOnInit(): void {

  }

}
