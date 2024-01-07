import { Component } from '@angular/core';
import { Lagergegenstand } from '../../../Lagergegenstand';
import { Zeugs } from '../../../Storage';

@Component({
  selector: 'app-zutaten',
  templateUrl: './zutaten.component.html',
  styleUrl: './zutaten.component.css'
})
export class ZutatenComponent {
  zeugs : Lagergegenstand[] = Zeugs;
  gegenstand : Lagergegenstand = {
    id : 1,
    name : "Melonen Marmelade",
    beschreibung: "Frische Fruchtmarmelade",
    mengenbezeichner:"Gramm",
    lagerort: "A1",
    lagerzeitpunktcode: "12.23",
    lagerortmengencode: "500 A1",
    lagerortId: 1,
    menge: 500,
    lagerzeitpunkt: new Date()
  }

}
