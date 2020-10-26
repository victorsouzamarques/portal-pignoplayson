import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxLoadingModule } from 'ngx-loading';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { PublicComponent } from './layout/public/public.component';
import { SecureComponent } from './layout/secure/secure.component';
import { UploadFileComponent } from './secure/upload-file/upload-file.component';
import { HomeComponent } from './secure/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { HeaderComponent } from './layout/secure/header/header.component';
import { LeftMenuComponent } from './layout/secure/left-menu/left-menu.component';
import { AuthGuard } from 'src/common/auth.guard';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';
import { MatSnackBarModule, MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';
import { RecalculationModalComponent } from './modals/recalculation-modal/recalculation-modal.component';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from 'src/environments/environment';
import {MatMenuModule} from '@angular/material/menu';
import { ListTransfersComponent } from './secure/list-transfers/list-transfers.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    SecureComponent,
    UploadFileComponent,
    ListTransfersComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    LeftMenuComponent,
    ConfirmModalComponent,
    RecalculationModalComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    NgxLoadingModule.forRoot({}),
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    FormsModule,
    MatMenuModule
  ],
  entryComponents: [RecalculationModalComponent],
  providers: [AuthGuard, {provide: APP_BASE_HREF, useValue: environment.baseHref}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
