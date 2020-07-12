import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menueitem = [
    {
      name: 'Plats',
      path: '/plat'
    },
    {
      name: 'Tables',
      path: '/table'
    },
    {
      name: 'Serveurs',
      path: '/serveur'
    },
    {
      name: 'Categories',
      path: '/category'
    }
  ];

  constructor() {
  }


  ngOnInit(): void {

  }

}
