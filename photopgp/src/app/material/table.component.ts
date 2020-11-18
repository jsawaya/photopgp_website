import { Component } from '@angular/core';

export interface FeatureElement {
  //  position: number;
  feature: string;
  full_edition: string;
  personal_edition: string;
  demo_edition: string;
}

const ELEMENT_DATA: FeatureElement[] = [
  { feature: 'PublicKey/Encryption',
  full_edition: 'Allows you to authorize access to your data files using the recipients\' public key(s)',
  personal_edition: 'Allows only one key (your private key), only you can access your data files',
  demo_edition: 'Only allows the "demo" private key and allows additional PGP public keys' },
  { feature: 'PrivateKey/Decryption',
  full_edition: 'Authorized recipients can use their own private key to decrypt images and data files',
  personal_edition: 'Only your private key [and password] can decrypt your images and data files',
  demo_edition: 'Using the  "demo" password, anyone can decrypt the data files (for evaluation and demonstration purposes only)' },
  { feature: 'Import Key Files into OpenKeychain App',
  full_edition: 'Supported',
  personal_edition: 'Supported',
  demo_edition: 'Supported' },
  { feature: 'Image Viewer with automatic decryption',
  full_edition: 'Supported',
  personal_edition: 'Supported',
  demo_edition: 'Supported' },
  { feature: 'Captions / Notes can be signed and verified',
  full_edition: 'Supported',
  personal_edition: 'Supported',
  demo_edition: 'Supported - with demo key' },
  { feature: 'Create Detached Signature for any file',
  full_edition: 'Supported',
  personal_edition: 'Supported',
  demo_edition: 'Supported - with demo key' },
  { feature: 'Private Storage',
  full_edition: 'Supported',
  personal_edition: 'Supported',
  demo_edition: 'Not Supported' },
  { feature: 'Public Storage',
  full_edition: 'Supported',
  personal_edition: 'Supported',
  demo_edition: 'Limited (public internal storage only)' },
  { feature: 'Zip File',
  full_edition: 'Supported',
  personal_edition: 'Supported',
  demo_edition: 'Supported' },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html'
})
export class TableComponent {
  displayedColumns: string[] = ['feature', 'full_edition', 'personal_edition', 'demo_edition'];
  dataSource = ELEMENT_DATA;
}

