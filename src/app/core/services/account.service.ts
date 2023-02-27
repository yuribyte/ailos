import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { UserAccountModel } from 'src/app/core/model/user.model';
import { DataMock } from 'src/app/mock/data.mock';

@Injectable({ providedIn: 'root' })
export class AccountService {
  constructor() {}

  requestAccountInfo() {
    return of(DataMock.rawAccountData()).pipe(
      catchError((error: unknown) => {
        console.error(error);
        return of({} as UserAccountModel.User);
      })
    );
  }
}
