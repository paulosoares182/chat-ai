import { Routes } from '@angular/router';
import { MainComponent } from './core/main/main.component';
import { ChatComponent } from './pages/chat/chat.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';

export const routes: Routes = [
    {
        path: '', component: MainComponent,
        children: [
            { path: 'chat/:id', component: ChatComponent },
            { path: 'chat', pathMatch: 'full', redirectTo: '' }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'change-password', component: ChangePasswordComponent },
    { path: '**', component: NotFoundComponent }
];
