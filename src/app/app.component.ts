import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'docs-covalent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class DocsAppComponent {

  constructor(
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
  ) {
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'teradata',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/teradata.svg',
      ),
    );
    this._iconRegistry.addSvgIcon(
      'teradata',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/teradata.svg',
      ),
    );
    this._iconRegistry.addSvgIcon(
      'teradata-dark',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/teradata-dark.svg',
      ),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      `covalent_stroke`,
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent-stroke.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      `covalent_mark`,
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent-mark.svg'),
    );
  }

  get activeTheme(): string {
    return localStorage.getItem('theme');
  }
  theme(theme: string): void {
    localStorage.setItem('theme', theme);
  }
}
