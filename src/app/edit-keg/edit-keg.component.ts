import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() clickedDone = new EventEmitter();

  finishEdit() {
    this.clickedDone.emit();
  }
}


// export class EditKegComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
