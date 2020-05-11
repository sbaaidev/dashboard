import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
menueitem=[
  {
      name: 'Gestion des plats'
  },
  {
      name: 'Gestion des tables'
  },
  {
    name: 'Gestion des serveurs'
}
];
  constructor() { }


  ngOnInit(): void {

  }

}
