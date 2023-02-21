import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.scss']
})
export class SimuladorComponent {

  //Reemplazar los any -> Problemas con interfaz: id

  @Input() product!: any;

}
