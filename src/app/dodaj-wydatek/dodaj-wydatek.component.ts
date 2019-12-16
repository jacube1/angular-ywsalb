import { Component, OnInit } from '@angular/core';
import { Wydatek } from '../wydatek';
@Component({
  selector: 'app-dodaj-wydatek',
  templateUrl: './dodaj-wydatek.component.html',
  styleUrls: ['./dodaj-wydatek.component.css']
})
export class DodajWydatekComponent implements OnInit 
{
  nowyWydatek: Wydatek;
  constructor() 
  { 

  }
  ngOnInit() 
  {
    this.nowyWydatek = new Wydatek('Tankowanie', null, null, null);
  }
}