import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../../../common/auth.guard';
import { UploadFileComponent } from 'src/app/secure/upload-file/upload-file.component';
import { HomeComponent } from 'src/app/secure/home/home.component';
import { ListTransfersComponent } from 'src/app/secure/list-transfers/list-transfers.component';

export const SECURE_ROUTES: Routes = [
    { path: 'uploadfile', component: UploadFileComponent },
    { path: 'home', component: HomeComponent },
    { path: 'listtransfers', component: ListTransfersComponent}
];