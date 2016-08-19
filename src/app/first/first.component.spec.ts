/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { FirstComponentComponent } from './first-component.component';

describe('Component: FirstComponent', () => {
  it('should create an instance', () => {
    let component = new FirstComponentComponent();
    expect(component).toBeTruthy();
  });
});
