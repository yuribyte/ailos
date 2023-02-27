import { Component, Input } from '@angular/core';

@Component({
  selector: 'ailos-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input()
  hasValidData!: boolean;
}
