import { Injectable } from '@angular/core';

@Injectable()
export class StateService {

  stateChanges = 0;

  constructor() { }

  addStateChange(): void {
    this.stateChanges += 1;
  }

  getStateChange(): number {
    return this.stateChanges;
  }

}
