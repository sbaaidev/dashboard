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
      icon: 'fas fa-concierge-bell',
      path: '/plat'
    },
    {
      name: 'Tables',
      icon: 'fas fa-utensils',
      path: '/table'
    },
    {
      name: 'Serveurs',
      icon: 'fas fa-user-tie',
      path: '/serveur'
    },
    {
      name: 'Categories',
      icon: 'fas fa-list',
      path: '/category'
    }
  ];

  constructor() {
  }


  ngOnInit(): void {

  }

}
