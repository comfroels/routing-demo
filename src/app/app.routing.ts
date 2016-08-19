import { Routes, RouterModule }   from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';

const appRoutes: Routes = [
    { path: '', component: FirstComponent },
    { path: 'second-component', component: SecondComponent },
    { path: 'third-component', component: ThirdComponent },
    { path: 'fourth-component', component: FourthComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);