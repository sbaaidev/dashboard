import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  showSubMenu = false;
  menueitem = [
    {
      name: 'Accueil',
      icon: 'fas fa-home',
      path: '/home'
    },
    {
      name: 'Plats',
      icon: 'fas fa-concierge-bell',
      innerItem: [
        {name: 'Categories', icon: 'fas fa-list', path: '/category'},
        {name: 'Plats', icon: 'fas fa-utensils', path: '/plat'},
      ],
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
    }
  ];

  constructor() {
  }

  ngOnInit(): void {

  }

  showHideSubMenu(){
    this.showSubMenu = !this.showSubMenu;
  }
}
