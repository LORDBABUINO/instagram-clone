import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { Image } from './image.model'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('hidden <=> visible', animate('1s ease-in')),
    ])
  ]
})
export class BannerComponent implements OnInit {

  public state: string = 'hidden'
  public images: Image[] = [
    { state: 'visible', url: '/assets/banner-access/img_1.png'},
    { state: 'hidden', url: '/assets/banner-access/img_2.png'},
    { state: 'hidden', url: '/assets/banner-access/img_3.png'},
    { state: 'hidden', url: '/assets/banner-access/img_4.png'},
    { state: 'hidden', url: '/assets/banner-access/img_5.png'}
  ]

  constructor() { }

  ngOnInit(){
    setTimeout(() => this.rotate(0), 3000)
  }

  public rotate(indexCurrenty: number): void {

    let indexNext = indexCurrenty < 4? indexCurrenty + 1 : 0

    this.images[indexCurrenty].state = 'hidden'
    this.images[indexNext].state = 'visible'

    setTimeout(() => this.rotate(indexNext), 3000)
  }
}
