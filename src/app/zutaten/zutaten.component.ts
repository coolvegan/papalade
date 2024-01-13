import { Component, OnInit, inject } from "@angular/core";
import { Lagergegenstand, Lagerort } from "../../../Lagergegenstand";
import { LgService } from "../../../lagergegenstand.service";
import { LagerortService } from "../../../lagerort.service";

@Component({
  selector: "app-zutaten",
  templateUrl: "./zutaten.component.html",
  styleUrl: "./zutaten.component.css",
})
export class ZutatenComponent implements OnInit {
  suchString = "";
  orte: Lagerort[] = [];
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

  constructor(private lgService: LgService, private lagerortService :LagerortService) {}

  ngOnInit(): void {
    this.lagerortService.getLagerOrte().subscribe(
      result => {
        this.orte = result;
      }
    )
    this.lgService.getLagergegenstaende().subscribe((result) => {
      this.zeugs = result;
    });
  }

  such(arg : string):void {
    this.lgService.getLagergegenstaendeFuerOrt(arg).subscribe((result) => {
      this.zeugs = result;
      console.log(result);
    });
  }

  suchText():void {
    this.lgService.getLagergegenstaendeBySubString(this.suchString).subscribe((result) => {
      this.zeugs = result;
      console.log(result);
    });
  }
}
