import { Component, Input } from '@angular/core';
import { UserAccountModel } from 'src/app/core/model/user.model';

@Component({
  selector: 'ailos-consult-user-result',
  templateUrl: './consult-user-result-card.component.html',
  styleUrls: ['./consult-user-result-card.component.scss']
})
export class ConsultUserResultCardComponent {
  @Input()
  userAccountInfo?: UserAccountModel.User;
}
