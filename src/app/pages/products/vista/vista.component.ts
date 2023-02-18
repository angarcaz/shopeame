import { Component } from '@angular/core';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.scss']
})
export class VistaComponent {
  dia: boolean = true;
  
  constructor() {}

  selectNoche() {
    this.dia = false;
  }
  selectDia() {
    this.dia = true;
  }
}

