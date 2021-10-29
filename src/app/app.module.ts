import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// carbon-components-angular default imports
import { UIShellModule, IconModule, IconService } from 'carbon-components-angular';

import {
  NotificationModule,
  UserAvatarModule,
  AppSwitcherModule
} from '@carbon/icons-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    IconModule,
    NotificationModule,
		UserAvatarModule,
		AppSwitcherModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([
      Notification,
      UserAvatar16,
      AppSwitcher
    ]);
  }
}