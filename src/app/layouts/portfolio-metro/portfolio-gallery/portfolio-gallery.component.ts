import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
@Component({
  selector: 'app-portfolio-gallery',
  templateUrl: './portfolio-gallery.component.html',
  styleUrls: ['./portfolio-gallery.component.scss']
})

export class PortfolioGalleryComponent implements OnInit {
  public customizer: any = "syt"
  items: GalleryItem[] = [];
 
  imageData = data;

  kanbanImages = ["assets/images/kanban/1.PNG", "assets/images/kanban/2.PNG", "assets/images/kanban/3.PNG",]
  howishelImages = ["assets/images/howishel/1.PNG", "assets/images/howishel/2.PNG", "assets/images/howishel/3.PNG",]
  sytImages = ["assets/images/syt/1.png", "assets/images/syt/2.png", "assets/images/syt/3.png","assets/images/syt/4.png",]

  constructor(private displayblock: ColorScssService, public gallery: Gallery, public lightbox: Lightbox) {
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

  openGallery(val: any) {
    this.customizer = val
  }

}

const data = [
  {
    srcUrl: 'assets/images/portfolio/1.jpg',
    previewUrl: 'assets/images/portfolio/1.jpg'
  },
  {
    srcUrl: 'assets/images/portfolio/2.jpg',
    previewUrl: 'assets/images/portfolio/2.jpg'
  },
  {
    srcUrl: 'assets/images/portfolio/3.jpg',
    previewUrl: 'assets/images/portfolio/3.jpg'
  },
  {
    srcUrl: 'assets/images/portfolio/4.jpg',
    previewUrl: 'assets/images/portfolio/4.jpg'
  },
  {
    srcUrl: 'assets/images/portfolio/5.jpg',
    previewUrl: 'assets/images/portfolio/5.jpg'
  },
  {
    srcUrl: 'assets/images/portfolio/6.jpg',
    previewUrl: 'assets/images/portfolio/6.jpg'
  },
  {
    srcUrl: 'assets/images/portfolio/7.jpg',
    previewUrl: 'assets/images/portfolio/7.jpg'
  },
  {
    srcUrl: 'assets/images/portfolio/9.jpg',
    previewUrl: 'assets/images/portfolio/9.jpg'
  }
]
