import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  sellPint(currentKeg) {
    if (currentKeg.pints > 1) {
      currentKeg.pints -=1;
    } else {
      currentKeg.pints = "No";
    }
  }

  priceColor(currentKeg) {
    if (currentKeg.price <= 5) {
      return "low-price";
    } else {
      return "high-price";
    }
  }

  kegColor(currentKeg) {
    if (currentKeg.pints <= 10 || currentKeg.pints === "No") {
      return "low-keg";
    }
  }
}
// export class KegListComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
