import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-transaction',
  templateUrl: './item-transaction.component.html',
})
export class ItemTransactionComponent {
  @Input() transaction: any;
}
