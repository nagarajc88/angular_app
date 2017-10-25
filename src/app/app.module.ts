import { NgModule }      from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { HeaderService, AlertService, AuthenticationService, UserService,HomeService,ImageService } from './_services/index';
import { DetailService,ProductsService } from './_services/index';

import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { DetailComponent } from './details/index';
import { ProductsComponent } from './products/index';

import { RegisterComponent } from './register/index';
import { HeaderComponent } from './header/index';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        DetailComponent,
        ProductsComponent,
        AlertComponent,
        RegisterComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        CoolLocalStorage,
        HeaderService,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        ImageService,
        HomeService,
        DetailService,
        ProductsService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
