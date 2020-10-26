
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/public/login/login.component';
import { ConfirmModalComponent } from 'src/app/modals/confirm-modal/confirm-modal.component';


export const PUBLIC_ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'confirmodal', component: ConfirmModalComponent}
];