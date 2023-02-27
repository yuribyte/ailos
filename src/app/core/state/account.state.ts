import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { patch } from '@ngxs/store/operators';
import { take, tap } from 'rxjs';
import { UserAccountModel } from '../model/user.model';
import { AccountService } from '../services/account.service';

export namespace AccountStoreModel {
  export const TOKEN = new StateToken<AccountDataStore>('domainAccount');

  export interface AccountDataStore {
    accountInfo: UserAccountInfo | null;
    hasInvalidData: boolean;
  }

  export type UserAccountInfo = UserAccountModel.User;

  export const defaults = (): AccountDataStore => ({
    accountInfo: null,
    hasInvalidData: false
  });
}

export class AccountStoreSelectors {
  @Selector([AccountStoreModel.TOKEN])
  static rootData(
    state: AccountStoreModel.AccountDataStore
  ): AccountStoreModel.AccountDataStore | null {
    return state;
  }

  @Selector([AccountStoreSelectors.rootData])
  static dataAccountInfo(
    data: AccountStoreModel.AccountDataStore
  ): AccountStoreModel.UserAccountInfo | null {
    return data?.accountInfo;
  }

  @Selector([AccountStoreSelectors.rootData])
  static dataValidData(data: AccountStoreModel.AccountDataStore): boolean {
    return data?.hasInvalidData;
  }
}

export namespace AccountStorePayload {
  export class ClearState {
    static readonly type = '[Domains / Account] Clear state';
  }

  export class RequestAccountInfo {
    static readonly type = '[Domain / Account] Request Account Information';
  }

  export class RequestValidData {
    static readonly type = '[Domain / Account] Request Account Valid Data';
    constructor(public payload: { hasInvalidData: boolean }) {}
  }
}

@State<AccountStoreModel.AccountDataStore>({
  name: AccountStoreModel.TOKEN,
  defaults: AccountStoreModel.defaults()
})
@Injectable()
export class AccountState {
  constructor(private _accountService: AccountService) {}

  @Action([AccountStorePayload.ClearState])
  clearState({ setState }: StateContext<AccountStoreModel.AccountDataStore>) {
    return setState(
      patch<AccountStoreModel.AccountDataStore>(AccountStoreModel.defaults())
    );
  }

  @Action([AccountStorePayload.RequestAccountInfo])
  getAccountInfo({
    setState
  }: StateContext<AccountStoreModel.AccountDataStore>) {
    return this._accountService.requestAccountInfo().pipe(
      take(1),
      tap((value) => {
        setState(
          patch<AccountStoreModel.AccountDataStore>({ accountInfo: value })
        );
      })
    );
  }

  @Action([AccountStorePayload.RequestValidData])
  getAccountValidDataInfo(
    { setState }: StateContext<AccountStoreModel.AccountDataStore>,
    { payload }: AccountStorePayload.RequestValidData
  ) {
    const { hasInvalidData } = payload;

    setState(
      patch<AccountStoreModel.AccountDataStore>({ hasInvalidData })
    );
  }
}
