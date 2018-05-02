import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the Cider House';
  kegs: Keg[] = [
    new Keg('Sweet Pear','Angry Orchard', 3, 4),
    new Keg('Hoppy Grapefruit','Square Mile', 6,  7),
    new Keg('Super Dry', 'Seattle Cider', 6, 6),
    new Keg('Amber Apple', 'Woodchuck', 4, 5),
    new Keg('Pineapple Oasis', 'Portland Cider Co', 10, 9)
  ];
  selectedKeg = null;
  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishEdit() {
    this.selectedKeg = null;
  }

}
