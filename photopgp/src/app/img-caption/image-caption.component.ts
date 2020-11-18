import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-caption',
  templateUrl: './image-caption.component.html',
  styleUrls: ['./image-caption.component.css']
})
export class ImageCaptionComponent implements OnInit {
  @Input('imgSrc') imgSrc: string; // tslint:disable-line: no-input-rename
  @Input('title') title: string; // tslint:disable-line: no-input-rename
  @Input('caption') caption: string; // tslint:disable-line: no-input-rename
  @Input('format') format: string; // tslint:disable-line: no-input-rename

  constructor() {  }

  ngOnInit(): void {
    console.log(`ImageCaptionComponent ngOnInit
     imgSrc:${this.imgSrc}, title:${this.title}, caption:${this.caption}, style:${this.format} `);
  }

}
