import { Component } from '@angular/core';
import { Lagergegenstand } from '../../../Lagergegenstand';
import { Zeugs } from '../../../Storage';
@Component({
  selector: 'app-erstelle-zutat',
  templateUrl: './erstelle-zutat.component.html',
  styleUrl: './erstelle-zutat.component.css'
})
export class ErstelleZutatComponent {

  lagergegenstand : Lagergegenstand = Zeugs[0];

  save() : void  {
    alert();
  }
}
