import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-fourth',
  templateUrl: 'fourth.component.html',
  styleUrls: ['fourth.component.css']
})
export class FourthComponent implements OnInit {
  title: string = 'Fourth component works!';
  stateChanges: number = 0;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateChanges = this.stateService.getStateChange();
  }

  ngDoCheck(): void{
    this.stateChanges = this.stateService.getStateChange();
  }

}
