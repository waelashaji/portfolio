import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {

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
    srcUrl: 'assets/images/journey/1.PNG',
    previewUrl: 'assets/images/journey/1.PNG'
  },
  {
    srcUrl: 'assets/images/journey/2.PNG',
    previewUrl: 'assets/images/journey/2.PNG'
  },
  {
    srcUrl: 'assets/images/journey/3.PNG',
    previewUrl: 'assets/images/journey/3.PNG'
  },
  {
    srcUrl: 'assets/images/journey/4.PNG',
    previewUrl: 'assets/images/journey/4.PNG'
  }
]
