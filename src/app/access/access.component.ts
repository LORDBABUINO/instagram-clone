import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

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
        animate('500ms 0s ease-in-out')
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

}
