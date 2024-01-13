import { Component, OnInit } from "@angular/core";
import {
  Lagergegenstand,
  LagergegenstandCreate,
} from "../../../Lagergegenstand";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LgService } from "../../../lagergegenstand.service";
import { LagerortService } from "../../../lagerort.service";

@Component({
  selector: "app-erstelle-zutat",
  templateUrl: "./erstelle-zutat.component.html",
  styleUrl: "./erstelle-zutat.component.css",
})
export class ErstelleZutatComponent implements OnInit {
  showSuccessMessage = false;
  pattern = "";
  ortsMap = new Map<string, number>();

  lgForm: FormGroup = this.formBuilder.group({
    name: ["", Validators.required],
    beschreibung: [""],
    mengenbezeichner: ["", Validators.required],
    lagerort: [
      "",
      Validators.compose([
        Validators.required,
        Validators.pattern(this.pattern),
      ]),
    ],
    menge: ["", Validators.required],
    lagerzeitpunkt: [new Date(), Validators.required],
  });

  lagergegenstand: Lagergegenstand = {
    id: -1,
    name: "",
    beschreibung: "",
    mengenbezeichner: "",
    lagerort: "",
    lagerzeitpunktcode: "",
    lagerortmengencode: "",
    lagerortId: -1,
    menge: 0,
    lagerzeitpunkt: new Date(),
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private lgService: LgService,
    private lagerortService: LagerortService,
  ) {
  }

  save(): void {
    var lagerzeitpunkt = new Date(this.lagergegenstand.lagerzeitpunkt);
    var lagerortId = this.ortsMap.get(
      this.lgForm.get("lagerort")?.value,
    ) as number;


    var lgc: LagergegenstandCreate = {
      lagerzeitpunkt: lagerzeitpunkt,
      name: this.lgForm.get("name")?.value,
      beschreibung: this.lgForm.get("beschreibung")?.value,
      mengenbezeichner: this.lgForm.get("mengenbezeichner")?.value,
      lagerortId: lagerortId,
      menge: this.lgForm.get("menge")?.value,
    };

    if (this.router.url == "/createZutat") {
    this.lgService.createLagergegenstand(lgc);
    } else {
    var id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
      this.lgService.updateLagergegenstand(id, lgc);
    }
      // Setze showSuccessMessage auf true
   this.showSuccessMessage = true;

   // Verstecke die Nachricht nach einer kurzen Zeit
   setTimeout(() => {
      this.showSuccessMessage = false;
      this.router.navigate(["/zutaten"]);
   }, 3000); // 3000 Millisekunden = 3 Sekunden
  }

  ngOnInit(): void {
    //Hole die erlaubten Ortskürzel
    this.lagerortService.getLagerOrte().subscribe((result) => {
      result.forEach((element) => {
        this.ortsMap.set(element.name, element.id);
        if (this.pattern != "") {
          this.pattern += "|";
        }
        this.pattern += element.name;
      });
    });

    this.lgForm = this.formBuilder.group({
      id: [-1],
      name: ["", Validators.required],
      beschreibung: [""],
      mengenbezeichner: ["", Validators.required],
      lagerort: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(this.pattern),
        ]),
      ],
      menge: ["", Validators.required],
      lagerzeitpunkt: [new Date(), Validators.required],
    });

    if (this.router.url == "/createZutat") {
      return;
    }
    var id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.lgService.getLagergegenstaende().subscribe((result) => {
      var data = result.find((a) => a.id == id);
      if (typeof data == typeof (this.lagergegenstand) && data != undefined) {
        this.lagergegenstand = data;
        this.lgForm.setValue({
          id: id,
          name: this.lagergegenstand.name,
          beschreibung: this.lagergegenstand.beschreibung,
          mengenbezeichner: this.lagergegenstand.mengenbezeichner,
          lagerort: this.lagergegenstand.lagerort,
          menge: this.lagergegenstand.menge,
          lagerzeitpunkt: this.lagergegenstand.lagerzeitpunkt,
        });
      }
    });
  }

  dateChanged(event: Event) {
    var val = (event.target as HTMLInputElement).value;
    this.lagergegenstand.lagerzeitpunkt = new Date(val);
  }
}
