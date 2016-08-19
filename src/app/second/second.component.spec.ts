/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { SecondComponent } from './second.component';

describe('Component: Second', () => {
  it('should create an instance', () => {
    let component = new SecondComponent();
    expect(component).toBeTruthy();
  });
});
