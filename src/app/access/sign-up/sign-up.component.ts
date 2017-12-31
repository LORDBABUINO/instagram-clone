import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { User } from '../user.model'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @Output() public showPanel: EventEmitter<boolean> = new EventEmitter<boolean>()

  public form: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'fullName': new FormControl(null),
    'userName': new FormControl(null),
    'password': new FormControl(null)
  })

  constructor() { }

  ngOnInit() {
  }

  public showLogin(): void{
    this.showPanel.emit(true)
  }

  public signUp(): void{
    let user: User = new User(
      this.form.value.email,
      this.form.value.fullName,
      this.form.value.userName,
      this.form.value.password
    )
  }
}
