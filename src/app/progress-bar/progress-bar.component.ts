import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input('progress') progress: Number;
  @Input('color') color: any;
  @Input('percentageSize') percentageSize: any;

  public percentageStyles: Object = {};
  public barStyles: Object = {};

  constructor() {
    this.progress = this.progress || 50;
  }

  ngOnInit() {
    this.percentageStyles = {
      'left': `${this.progress || 50}%`,
      'font-size': this.percentageSize || '14',
    }

    this.barStyles = {
      'width': `${this.progress || 50}%`,
      'background-color': this.color || 'green',
    }

    console.log('this.progress', this.progress)
    console.log('this.percentageSize', this.percentageSize)
    console.log('this.color', this.color)
    console.log('this.percentageStyles', this.percentageStyles)
    console.log('this.barStyles', this.barStyles)
  }

}
