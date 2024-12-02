import { Component, signal } from '@angular/core';
import { HeadService } from '../../shared/services/head.service';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { Viajes } from '../../shared/models/viajes.model';
import { ViajesComponent } from '../../shared/components/viajes/viajes.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ViajesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  ngOnInit(): void {
    this.headService.setMetaDescription(
      'Prueba técnica Maquetador Senior W2M'
    );
    this.headService.setCanonicalUrl(
      'https://w2m.com'
    );
  }

  viaje = signal<Viajes[]>([]);

  constructor(private headService: HeadService) {
    const initViajes: Viajes[] = [
      {
        id: 0,
        image: '../../../assets/images/shop-grid/Image.jpg',
        altImg: 'Alt de la imagen 0',
        tags: [
          { id:0, tag: 'TextChip1' },
          { id:1, tag: 'TextChip2' },
          { id:2, tag: 'TextChip3' }
        ],
        date: '10/05/2022',
        title: 'Sed donec blandit amet fames morbi donec tincidunt.',
        text: 'Velit non id lacus eros montes. Arcu quis facilisis ut sed tempor vitae non adipiscing. Quam quis arcu ac in vulputate diam at tellus urna.',
        price: '2.031'
      },
      {
        id: 1,
        image: '../../../assets/images/shop-grid/Image.jpg',
        altImg: 'Alt de la imagen 1',
        tags: [
          { id:0, tag: 'TextChip' },
          { id:1, tag: 'TextChip' },
          { id:2, tag: 'TextChip' }
        ],
        date: '10/05/2022',
        title: 'Sed donec blandit amet fames morbi donec tincidunt.',
        text: 'Velit non id lacus eros montes. Arcu quis facilisis ut sed tempor vitae non adipiscing. Quam quis arcu ac in vulputate diam at tellus urna.',
        price: '2.031'
      },
      {
        id: 2,
        image: '../../../assets/images/shop-grid/Image.jpg',
        altImg: 'Alt de la imagen 2',
        tags: [
          { id:0, tag: 'TextChip' },
          { id:1, tag: 'TextChip' },
          { id:2, tag: 'TextChip' }
        ],
        date: '10/05/2022',
        title: 'Sed donec blandit amet fames morbi donec tincidunt.',
        text: 'Velit non id lacus eros montes. Arcu quis facilisis ut sed tempor vitae non adipiscing. Quam quis arcu ac in vulputate diam at tellus urna.',
        price: '2.031'
      },
      {
        id: 2,
        image: '../../../assets/images/shop-grid/Image.jpg',
        altImg: 'Alt de la imagen 2',
        tags: [
          { id:0, tag: 'TextChip' },
          { id:1, tag: 'TextChip' },
          { id:2, tag: 'TextChip' }
        ],
        date: '10/05/2022',
        title: 'Sed donec blandit amet fames morbi donec tincidunt.',
        text: 'Velit non id lacus eros montes. Arcu quis facilisis ut sed tempor vitae non adipiscing. Quam quis arcu ac in vulputate diam at tellus urna.',
        price: '2.031'
      },
      {
        id: 2,
        image: '../../../assets/images/shop-grid/Image.jpg',
        altImg: 'Alt de la imagen 2',
        tags: [
          { id:0, tag: 'TextChip' },
          { id:1, tag: 'TextChip' },
          { id:2, tag: 'TextChip' }
        ],
        date: '10/05/2022',
        title: 'Sed donec blandit amet fames morbi donec tincidunt.',
        text: 'Velit non id lacus eros montes. Arcu quis facilisis ut sed tempor vitae non adipiscing. Quam quis arcu ac in vulputate diam at tellus urna.',
        price: '2.031'
      },
      {
        id: 2,
        image: '../../../assets/images/shop-grid/Image.jpg',
        altImg: 'Alt de la imagen 2',
        tags: [
          { id:0, tag: 'TextChip' },
          { id:1, tag: 'TextChip' },
          { id:2, tag: 'TextChip' }
        ],
        date: '10/05/2022',
        title: 'Sed donec blandit amet fames morbi donec tincidunt.',
        text: 'Velit non id lacus eros montes. Arcu quis facilisis ut sed tempor vitae non adipiscing. Quam quis arcu ac in vulputate diam at tellus urna.',
        price: '2.031'
      },
      {
        id: 2,
        image: '../../../assets/images/shop-grid/Image.jpg',
        altImg: 'Alt de la imagen 2',
        tags: [
          { id:0, tag: 'TextChip' },
          { id:1, tag: 'TextChip' },
          { id:2, tag: 'TextChip' }
        ],
        date: '10/05/2022',
        title: 'Sed donec blandit amet fames morbi donec tincidunt.',
        text: 'Velit non id lacus eros montes. Arcu quis facilisis ut sed tempor vitae non adipiscing. Quam quis arcu ac in vulputate diam at tellus urna.',
        price: '2.031'
      },
      {
        id: 2,
        image: '../../../assets/images/shop-grid/Image.jpg',
        altImg: 'Alt de la imagen 2',
        tags: [
          { id:0, tag: 'TextChip' },
          { id:1, tag: 'TextChip' },
          { id:2, tag: 'TextChip' }
        ],
        date: '10/05/2022',
        title: 'Sed donec blandit amet fames morbi donec tincidunt.',
        text: 'Velit non id lacus eros montes. Arcu quis facilisis ut sed tempor vitae non adipiscing. Quam quis arcu ac in vulputate diam at tellus urna.',
        price: '2.031'
      }

    ];
    this.viaje.set(initViajes);
  }
}
