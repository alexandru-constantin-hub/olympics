import { Component, OnInit } from '@angular/core';
import { SUMMER, WINTER } from '../olympics';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  summerOlympics = SUMMER;
  winterOlympics = WINTER;
  constructor() { }

  ngOnInit(): void {
  }

}
