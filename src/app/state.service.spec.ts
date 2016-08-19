/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { StateService } from './state.service';

describe('Service: State', () => {
  beforeEach(() => {
    addProviders([StateService]);
  });

  it('should ...',
    inject([StateService],
      (service: StateService) => {
        expect(service).toBeTruthy();
      }));
});
