import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { DetailComponent } from './details/index';
import { ProductsComponent } from './products/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: HomeComponent},
    { path: 'product-details/:id', component: DetailComponent },
    { path: 'product-list/:id', component: ProductsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: '**', redirectTo: '' }

  ];

export const routing = RouterModule.forRoot(appRoutes);
