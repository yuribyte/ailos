import { Component, Input } from '@angular/core';

@Component({
  selector: 'ailos-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {
  @Input()
  logo!: string;
}
