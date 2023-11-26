import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'pm-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})

export class StarsComponent implements OnChanges {
  cropWidth: number = 75;
  @Input() rating: number = 0; 
  
  @Output() ratingClicked: EventEmitter<string>
                      = new EventEmitter<string>();
  
  ngOnChanges(): void {
    this.cropWidth = this.rating * 75/5;
  }

  onClick() : void {
    this.ratingClicked.emit(`Rating: ${this.rating}`)
  }
}
