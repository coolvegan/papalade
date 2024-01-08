import { Component, OnInit } from '@angular/core';
import { Lagergegenstand, LagergegenstandCreate } from '../../../Lagergegenstand';
import { Zeugs } from '../../../Storage';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LgService } from '../../../lagergegenstand.service';
@Component({
  selector: 'app-erstelle-zutat',
  templateUrl: './erstelle-zutat.component.html',
  styleUrl: './erstelle-zutat.component.css'
})
export class ErstelleZutatComponent implements OnInit{

  lgForm : FormGroup = this.formBuilder.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    beschreibung: ['', Validators.required],
    mengenbezeichner: ['', Validators.required],
    lagerort: ['', Validators.required],
    menge: ['', Validators.required],
    lagerzeitpunktcode: ['', Validators.required],
    lagerortmengencode: ['', Validators.required],
    lagerzeitpunkt: ['', Validators.required],
  });

  lagergegenstand : Lagergegenstand = {
    id : 1,
    name : "Apfelsinen Marmelade",
    beschreibung: "Frische Fruchtmarmelade",
    mengenbezeichner:"Gramm",
    lagerort: "A1",
    lagerzeitpunktcode: "12.23",
    lagerortmengencode: "700 A1",
    lagerortId: 1,
    menge: 700,
    lagerzeitpunkt: new Date("2023-05-06")
  }
  constructor(private router: Router, private activatedRoute : ActivatedRoute, private formBuilder : FormBuilder, private lgService : LgService){

  }

  save() : void  {
    var lgc : LagergegenstandCreate = {
      lagerzeitpunkt : this.lagergegenstand.lagerzeitpunkt,
      name : this.lagergegenstand.name,
      beschreibung : this.lagergegenstand.beschreibung,
      mengenbezeichner : this.lagergegenstand.mengenbezeichner,
      lagerortId : this.lagergegenstand.lagerortId,
      menge: this.lagergegenstand.menge
    };
    console.log(lgc);
    this.lgService.createLagergegenstand(lgc);
  }

  ngOnInit(): void {
    if(this.router.url == "/createZutat"){
      return;
    }
    var id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    var lgById = Zeugs.find((a) => a.id == id)!;
    this.lagergegenstand = lgById;

    this.lgForm.setValue({
    id : this.lagergegenstand.id,
    name : this.lagergegenstand.name,
    beschreibung: this.lagergegenstand.beschreibung,
    mengenbezeichner: this.lagergegenstand.mengenbezeichner,
    lagerort: this.lagergegenstand.lagerort,
    lagerzeitpunktcode: this.lagergegenstand.lagerzeitpunktcode,
    lagerortmengencode: this.lagergegenstand.lagerortmengencode,
    menge: this.lagergegenstand.menge,
    lagerzeitpunkt: this.lagergegenstand.lagerzeitpunkt
    })
  }

  dateChanged(event: Event) {
    var val = (event.target as HTMLInputElement).value;
    this.lagergegenstand.lagerzeitpunkt = new Date(val);
  }}
