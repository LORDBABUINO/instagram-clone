import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @Output() public showPanel: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

  public showLogin(): void{
    this.showPanel.emit(true)
  }
}
