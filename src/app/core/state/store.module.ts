import { NgModule } from '@angular/core';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsSelectSnapshotModule } from '@ngxs-labs/select-snapshot';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { AccountState } from './account.state';

@NgModule({
  imports: [
    // * NGXS  State Setup
    NgxsModule.forRoot([AccountState], {
      developmentMode: !environment.production,
      selectorOptions: {
        suppressErrors: false,
        injectContainerState: false
      }
    }),

    // * NGXS  Extensions
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),
    NgxsDispatchPluginModule.forRoot(),
    NgxsSelectSnapshotModule.forRoot()
  ]
})
export class AppStoreModule {}
