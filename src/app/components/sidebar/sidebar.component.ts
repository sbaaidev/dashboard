import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 private  menueitem:string[]=[];
  constructor() { }


  ngOnInit(): void {
    this.menueitem=["Gestion des plas",
  "gestion des factures",
"gestion des secrteurs"]
  }

}
