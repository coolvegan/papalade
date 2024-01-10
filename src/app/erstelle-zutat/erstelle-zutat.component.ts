import { Component, OnInit } from "@angular/core";
import {
  Lagergegenstand,
  LagergegenstandCreate,
} from "../../../Lagergegenstand";
import { Zeugs } from "../../../Storage";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LgService } from "../../../lagergegenstand.service";

@Component({
  selector: "app-erstelle-zutat",
  templateUrl: "./erstelle-zutat.component.html",
  styleUrl: "./erstelle-zutat.component.css",
})
export class ErstelleZutatComponent implements OnInit {
  pattern = "";

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
    lagerzeitpunkt: ["", Validators.required],
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
  ) {
  }

  save(): void {
    var lagerzeitpunkt = new Date(this.lagergegenstand.lagerzeitpunkt);
    var lgc: LagergegenstandCreate = {
      lagerzeitpunkt: lagerzeitpunkt,
      name: this.lgForm.get("name")?.value,
      beschreibung: this.lgForm.get("beschreibung")?.value,
      mengenbezeichner: this.lgForm.get("mengenbezeichner")?.value,
      lagerortId: this.lgForm.get("lagerortId")?.value,
      menge: this.lgForm.get("menge")?.value,
    };
    console.log(lgc);
    this.lgService.createLagergegenstand(lgc);
    this.router.navigate(["/zutaten"]);
  }

  ngOnInit(): void {
    this.lgService.getLagerOrte().subscribe((result) => {
      console.log(result);
      result.forEach((element) => {
        if (this.pattern != "") {
          this.pattern += "|";
        }
        this.pattern += element.name;
      });
    });
    console.log(this.pattern);
    this.lgForm = this.formBuilder.group({
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
      lagerzeitpunkt: ["", Validators.required],
    });

    if (this.router.url == "/createZutat") {
      return;
    }
    var id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    var lgById = Zeugs.find((a) => a.id == id)!;
    this.lagergegenstand = lgById;

    this.lgForm.setValue({
      id: this.lagergegenstand.id,
      name: this.lagergegenstand.name,
      beschreibung: this.lagergegenstand.beschreibung,
      mengenbezeichner: this.lagergegenstand.mengenbezeichner,
      lagerort: this.lagergegenstand.lagerort,
      lagerzeitpunktcode: this.lagergegenstand.lagerzeitpunktcode,
      lagerortmengencode: this.lagergegenstand.lagerortmengencode,
      menge: this.lagergegenstand.menge,
      lagerzeitpunkt: this.lagergegenstand.lagerzeitpunkt,
    });
  }

  dateChanged(event: Event) {
    var val = (event.target as HTMLInputElement).value;
    this.lagergegenstand.lagerzeitpunkt = new Date(val);
    this.lgForm.setValue({
      lagerzeitpunkt: new Date(val),
    });
  }
}
