import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select } from '@ngxs/store';
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
  private _clearAccountData() {
    return new AccountStorePayload.ClearState();
  }

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

  handleSelectAccount() {
    this._requestAccountInfo();
  }

  handleInvalidData(isFormInvalid: boolean) {
    this._requestValidData(isFormInvalid);

    if (isFormInvalid) {
      this._listenInvalidData();
    }
  }

  private _listenInvalidData() {
    this._clearAccountData();
  }
}
