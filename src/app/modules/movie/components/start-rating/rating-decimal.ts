import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngbd-rating-decimal',
  templateUrl: './rating-decimal.html',
  styles: [`
    pre {
      margin: 0;
    }

    .star {
      position: relative;
      display: inline-block;
      font-size: 1rem;
      color: #537483;
      margin: 0 5px 0 0;
    }

    .full {
      color: #344a54;
    }

    .half {
      position: absolute;
      display: inline-block;
      overflow: hidden;
      color: #344a54;
    }
  `]
})
export class NgbdRatingDecimal {
  @Input()
  currentRate: number;
}
