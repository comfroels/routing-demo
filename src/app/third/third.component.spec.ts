/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ThirdComponent } from './third.component';

describe('Component: Third', () => {
  it('should create an instance', () => {
    let component = new ThirdComponent();
    expect(component).toBeTruthy();
  });
});
