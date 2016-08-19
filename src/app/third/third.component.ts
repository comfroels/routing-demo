import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-third',
  templateUrl: 'third.component.html',
  styleUrls: ['third.component.css']
})
export class ThirdComponent implements OnInit {
  title: string = 'Third component works!';
  stateChanges: number = 0;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateChanges = this.stateService.getStateChange();
  }

  ngDoCheck(): void{
    this.stateChanges = this.stateService.getStateChange();
  }

}
