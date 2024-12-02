import { Component } from '@angular/core';
import { HeadService } from '../../shared/services/head.service';

@Component({
  selector: 'app-travels',
  standalone: true,
  imports: [],
  templateUrl: './travels.component.html',
  styleUrl: './travels.component.scss'
})
export class TravelsComponent {

  constructor(private headService: HeadService) {}

  ngOnInit(): void {
    this.headService.setMetaDescription(
      'Viajes'
    );
    this.headService.setCanonicalUrl(
      'https://w2m.com/viajes'
    );
  }
}
