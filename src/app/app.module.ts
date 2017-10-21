import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService,HomeService,ImageService } from './_services/index';
import { DetailService } from './_services/index';

import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { DetailComponent } from './details/index';

import { RegisterComponent } from './register/index';
import { HeaderComponent } from './header/header.component';
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
        AlertComponent,
        RegisterComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        ImageService,
        HomeService,
        DetailService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
