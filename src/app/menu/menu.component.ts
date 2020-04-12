import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public isCollapsed = true;
  collapsed = true;
  title ="TDN CRM";

  constructor() { }

  ngOnInit(): void {
  }

}
