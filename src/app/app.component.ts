import { Component, Inject } from '@angular/core';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [
    StateService
  ],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title: string = 'Routing Demo works!';
  stateChanges: number;
  constructor(public stateService: StateService, @Inject('Window') public window: Window) {
    this.stateChanges = this.stateService.getStateChange();
    this.window.onpopstate = function (evt) {
      this.stateService.addStateChange();
      this.updateStateChanges();
    }.bind(this);
  }

  ngOnInit() {
    this.stateChanges = this.stateService.getStateChange();
  }

  updateStateChanges() {
    this.stateChanges = this.stateService.getStateChange();
  }

  newStateChange() {
    this.stateService.addStateChange();
    this.updateStateChanges();
  }

}
