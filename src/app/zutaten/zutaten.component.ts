import { Component, OnInit, inject } from "@angular/core";
import { Lagergegenstand } from "../../../Lagergegenstand";
import { LgService } from "../../../lagergegenstand.service";


@Component({
  selector: "app-zutaten",
  templateUrl: "./zutaten.component.html",
  styleUrl: "./zutaten.component.css",
})
export class ZutatenComponent implements OnInit {
  showSuccessMessage: boolean = false;
  zeugs: Lagergegenstand[] = [];
  lagergegenstand: Lagergegenstand = {
    id: 1,
    name: "Melonen Marmelade",
    beschreibung: "Frische Fruchtmarmelade",
    mengenbezeichner: "Gramm",
    lagerort: "A1",
    lagerzeitpunktcode: "12.23",
    lagerortmengencode: "500 A1",
    lagerortId: 1,
    menge: 500,
    lagerzeitpunkt: new Date(),
  };

  constructor(private lgService: LgService) {}

  ngOnInit(): void {
    this.lgService.getLagergegenstaende().subscribe((result) => {
      this.zeugs = result;
    });
  }
}
