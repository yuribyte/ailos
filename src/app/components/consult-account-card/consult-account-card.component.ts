import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isNil } from 'lodash-es';

@Component({
  selector: 'ailos-consult-account-card',
  templateUrl: './consult-account-card.component.html',
  styleUrls: ['./consult-account-card.component.scss']
})
export class ConsultAccountCardComponent {
  @Input()
  accountTitlePlaceholder!: string;

  @Input()
  accountSubtitlePlaceholder!: string;

  @Input()
  userAccountNumber!: string;

  @Output()
  emitDuplicateAccount = new EventEmitter<void>();

  handleSubmitDuplicateAccount() {
    const hasAccount = !isNil(this.userAccountNumber);

    if (hasAccount) {
      this.emitDuplicateAccount.emit();
    }
  }
}
