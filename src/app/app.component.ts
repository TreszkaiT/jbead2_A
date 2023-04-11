import { Component, OnInit } from '@angular/core';
//import {MenubarModule} from 'primeng/menubar';     // ennek az app.module.ts-ben kell lennie
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public items!: MenuItem[];
  title = 'jbead2';

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        routerLink: 'home',
      }
    ]
  }

}
