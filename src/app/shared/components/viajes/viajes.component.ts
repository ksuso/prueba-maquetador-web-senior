import { Component, Input } from '@angular/core';
import { Viajes } from '../../../shared/models/viajes.model';

@Component({
  selector: 'app-viajes',
  standalone: true,
  imports: [],
  templateUrl: './viajes.component.html',
  styleUrl: './viajes.component.scss'
})
export class ViajesComponent {

  @Input({required: true}) viaje!: Viajes;

}
