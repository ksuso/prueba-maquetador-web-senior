import { Component } from '@angular/core';
import { HeadService } from '../../shared/services/head.service';

@Component({
  selector: 'app-we',
  standalone: true,
  imports: [],
  templateUrl: './we.component.html',
  styleUrl: './we.component.scss'
})
export class WeComponent {

  constructor(private headService: HeadService) {}

  ngOnInit(): void {
    this.headService.setMetaDescription(
      'Nosotros'
    );
    this.headService.setCanonicalUrl(
      'https://w2m.com/nosotros'
    );
  }
}
