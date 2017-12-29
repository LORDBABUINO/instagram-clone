import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  public toggleState(): void {
    this.state = this.state === 'visible'? 'hidden' : 'visible'
  }
}
