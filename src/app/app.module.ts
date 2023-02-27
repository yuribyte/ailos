import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IMaskModule } from 'angular-imask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultAccountCardComponent } from './components/consult-account-card/consult-account-card.component';
import { ConsultSearchFormComponent } from './components/consult-search-form/consult-search-form.component';
import { ConsultUserResultCardComponent } from './components/consult-user-result-card/consult-user-result-card.component';
import { NavigationStepperComponent } from './components/navigation-stepper/navigation-stepper.component';
import { AccountService } from './core/services/account.service';
import { AppStoreModule } from './core/state/store.module';
import { ContentComponent } from './page/content/content.component';
import { FooterComponent } from './page/footer/footer.component';
import { HeaderComponent } from './page/header/header.component';
import { PageComponent } from './page/page.component';
import { SidemenuComponent } from './page/sidemenu/sidemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    ContentComponent,
    PageComponent,
    ConsultSearchFormComponent,
    ConsultUserResultCardComponent,
    ConsultAccountCardComponent,
    NavigationStepperComponent
  ],
  imports: [
    // * Angular Modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    // * Material Modules
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatRippleModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,

    // * Store Module
    AppStoreModule,

    // * Utility Modules
    IMaskModule
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    },
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
