import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, provide } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing,
         appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    { provide: 'Window',  useValue: window }
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
