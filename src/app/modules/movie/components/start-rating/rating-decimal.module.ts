import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {NgbdRatingDecimal} from './rating-decimal';

@NgModule({
  imports: [NgbModule],
  declarations: [NgbdRatingDecimal],
  exports: [NgbdRatingDecimal],
  bootstrap: [NgbdRatingDecimal]
})
export class NgbdRatingDecimalModule {}
