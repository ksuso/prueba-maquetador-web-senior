import { Component } from '@angular/core';
import { HeadService } from '../../shared/services/head.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private headService: HeadService) {}

  ngOnInit(): void {
    this.headService.setMetaDescription(
      'Contacto'
    );
    this.headService.setCanonicalUrl(
      'https://w2m.com/contacto'
    );
  }

}
