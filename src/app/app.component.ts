import { Component } from '@angular/core';

@Component({
  selector: 'mp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mp';

  menus = [
    { label: 'Hello World', link: './hello-world' },
  ];

}
