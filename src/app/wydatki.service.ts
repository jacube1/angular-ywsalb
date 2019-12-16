import { Injectable } from '@angular/core';
import { Wydatek, KATEGORIE } from './wydatek';
@Injectable()
export class WydatkiService 
{
  private wydatki: Wydatek[];
  constructor() 
  { 
    this.wydatki = 
    [
      new Wydatek('Tankowanie', 252.43, '', new Date(2018, 4, 30),1.1),
      new Wydatek('Myjnia', 75, '', new Date(2018, 4, 2)),
      new Wydatek('Serwis', 1250, 'Klocki, rozrząd i parę drobiazgów', new Date(2018, 3, 16),'',50),
      new Wydatek('Inne', 315.50, 'Różowe futerko na kierownicę', new Date(2018, 3, 16)),
      new Wydatek('Tankowanie', 325.20, 'Do pełna po urlopie', new Date(2017, 7, 12),1.1,1.2),
      new Wydatek('Tankowanie', 325.20, 'Do pełna wczoraj', new Date(2017, 8, 12),'',4.5)
    ];
  }
  getWydatki() 
  {
    return this.wydatki;
  }
}