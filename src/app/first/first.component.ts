import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-first',
  templateUrl: 'first.component.html',
  styleUrls: ['first.component.css']
})
export class FirstComponent implements OnInit {

  title: string = 'First component works!';
  stateChanges: number = 0;

  constructor(private stateService: StateService) {
    
  }

  ngOnInit(): void {
    this.stateChanges = this.stateService.getStateChange();
  }

  ngDoCheck(): void{
    this.stateChanges = this.stateService.getStateChange();
  }

}
