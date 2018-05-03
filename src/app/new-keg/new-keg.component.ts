import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})

export class NewKegComponent {
  @Output() sendKeg = new EventEmitter();

  submitForm(name: string, brand: string, price: string, abv: string, pints: number) {
    let newKeg: Keg = new Keg(name, brand, parseInt(price), parseInt(abv));
    this.sendKeg.emit(newKeg);
  }
}

// export class NewKegComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
