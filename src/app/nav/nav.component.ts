import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle = 'myapp';
  constructor() { }

  /**
   * TS way: appTitle: string = 'myapp';
   */

  /**
   * JavaScript way: appTitle = 'myapp';
   */
  ngOnInit() {
  }

}
