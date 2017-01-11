import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    providers:[],
    bootstrap: [AppComponent]
})
export class AppModule { }
