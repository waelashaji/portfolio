import { Component } from '@angular/core';
import { Gallery } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
@Component({
  selector: 'app-portfolio-gallery',
  templateUrl: './portfolio-gallery.component.html',
  styleUrls: ['./portfolio-gallery.component.scss']
})

export class PortfolioGalleryComponent {
  public customizer: any = "tradeSta"
 
  kanbanImages = ["assets/images/kanban/1.PNG", "assets/images/kanban/2.PNG", "assets/images/kanban/3.PNG",]
  howishelImages = ["assets/images/howishel/1.PNG", "assets/images/howishel/2.PNG", "assets/images/howishel/3.PNG",]
  sytImages = ["assets/images/syt/1.png", "assets/images/syt/2.png", "assets/images/syt/3.png","assets/images/syt/4.png",]
  tradestaImages = ["assets/images/tradsta/4.PNG", "assets/images/tradsta/2.PNG", "assets/images/tradsta/1.PNG", "assets/images/tradsta/3.PNG"]

  constructor(public gallery: Gallery, public lightbox: Lightbox) {
  }

  openGallery(val: any) {
    this.customizer = val
  }

}