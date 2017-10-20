import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor( @Inject(PLATFORM_ID) private platformId: Object ) {

  }

  ngOnInit() {
    console.log('ngOnInit app component is browser:', isPlatformBrowser(this.platformId), 'is server:', isPlatformServer(this.platformId));
  }
}
