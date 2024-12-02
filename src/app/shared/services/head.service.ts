import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class HeadService {
  constructor( private metaService: Meta ) {}

  setMetaDescription(description: string): void {
    this.metaService.updateTag({ name: 'description', content: description });
  }
  setMetaRobots(robots: string ): void {
    this.metaService.updateTag({ name: 'robots', content: robots });
  }
  setCanonicalUrl(canonicalUrl: string ): void {
    this.metaService.updateTag({ rel: 'canonical', href: canonicalUrl });
  }
}
