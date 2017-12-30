import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css'],
  animations: [
    trigger('animation-banner', [
      state('created', style({
        opacity: 1
      })),
      transition('void => created', [
        style({opacity: 0, transform: 'translate(-50px, 0px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ]),
    trigger('animation-panel', [
      state('created', style({
        opacity: 1
      })),
      transition('void => created', [
        style({opacity: 0, transform: 'translate(50px, 0px)'}),
        animate('1.5s 0s ease-in-out', keyframes([
          style({ offset: 0.15, opacity: 1, transform: 'translateX(0)'}),
          style({ offset: 0.86, opacity: 1, transform: 'translateX(0)'}),
          style({ offset: 0.88, opacity: 1, transform: 'translateY(-10px)'}),
          style({ offset: 0.9, opacity: 1, transform: 'translateY(10px)'}),
          style({ offset: 0.92, opacity: 1, transform: 'translateY(-10px)'}),
          style({ offset: 0.94, opacity: 1, transform: 'translateY(10px)'}),
          style({ offset: 0.96, opacity: 1, transform: 'translateY(-10px)'}),
          style({ offset: 0.98, opacity: 1, transform: 'translateY(10px)'}),
        ]))
      ])
    ])
  ]
})
export class AccessComponent implements OnInit {

  public stateBanner: string = 'created'
  public statePanel: string = 'created'
  public login: boolean = true

  constructor() { }

  ngOnInit() {
  }

  public showPanel(event: boolean): void{
    this.login = event
  }

  public startAnimation(): void {
    //console.log('inicio da animação')
  }

  public endAnimation(): void {
    //console.log('fim da animação')
  }
}
