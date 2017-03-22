import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  today: number = Date.now();
}
