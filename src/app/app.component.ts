import { Wydatek, KATEGORIE } from './wydatek';
import { Component } from '@angular/core';

@Component
(
  {
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
  }
)
export class AppComponent  
{
  name = 'Angular';
}
export class AppComponent  
{
    wydatki: Wydatek[];
}
ngOnInit() 
{

}
