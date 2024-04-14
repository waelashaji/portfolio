import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
@Component({
  selector: 'app-populus',
  templateUrl: './populus.component.html',
  styleUrls: ['./populus.component.scss']
})
export class PopulusComponent implements OnInit {
  items: GalleryItem[] = [];
 
  imageData = data;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {
  }

  ngOnInit() {
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
    const lightboxRef = this.gallery.ref('lightbox');
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });
    lightboxRef.load(this.items);
  }

}
const data = [
  {
    srcUrl: 'assets/images/populus/1.PNG',
    previewUrl: 'assets/images/populus/1.PNG'
  },
  {
    srcUrl: 'assets/images/populus/2.PNG',
    previewUrl: 'assets/images/populus/2.PNG'
  },
  {
    srcUrl: 'assets/images/populus/3.PNG',
    previewUrl: 'assets/images/populus/3.PNG'
  },
]
