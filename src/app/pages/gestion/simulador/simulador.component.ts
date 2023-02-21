import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.scss']
})
export class SimuladorComponent {

  @Input() product!: any;

}
