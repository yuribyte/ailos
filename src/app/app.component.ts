import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserAccountModel } from './core/model/user.model';
import {
  AccountStorePayload,
  AccountStoreSelectors as AccountSelector
} from './core/state/account.state';

@Component({
  selector: 'ailos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @Select(AccountSelector.dataAccountInfo)
  accountInfo$!: Observable<UserAccountModel.User>;

  @Select(AccountSelector.dataValidData)
  hasInvalidData$!: Observable<boolean>;

  @Dispatch()
  private _requestAccountInfo() {
    return new AccountStorePayload.RequestAccountInfo();
  }

  @Dispatch()
  private _requestValidData(isFormInvalid: boolean) {
    return new AccountStorePayload.RequestValidData({
      hasInvalidData: isFormInvalid
    });
  }

  constructor(private _store: Store) {}

  handleSelectAccount() {
    this._requestAccountInfo();
  }

  handleInvalidData(isFormInvalid: boolean) {
    this._requestValidData(isFormInvalid);
  }
}
