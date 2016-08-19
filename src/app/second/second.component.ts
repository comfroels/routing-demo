import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-second',
  templateUrl: 'second.component.html',
  styleUrls: ['second.component.css']
})
export class SecondComponent implements OnInit {

  title: string = 'Second component works!';
  stateChanges: number = 0;
  
  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateChanges = this.stateService.getStateChange();
  }

  ngDoCheck(): void{
    this.stateChanges = this.stateService.getStateChange();
  }

}
