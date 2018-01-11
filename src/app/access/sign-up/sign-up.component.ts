import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { User } from '../user.model'
import { Auth } from '../../auth.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @Output() public showPanel: EventEmitter<boolean> = new EventEmitter<boolean>()

  public form: FormGroup = new FormGroup({
    'email': new FormControl(null, [
      Validators.required,
      Validators.email,
      Validators.minLength(6),
      Validators.maxLength(20)
    ]),
    'fullName': new FormControl(null, [
      Validators.required,
      Validators.maxLength(50)
    ]),
    'userName': new FormControl(null, [
      Validators.required,
      Validators.maxLength(50)
    ]),
    'password': new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)
    ])
  })

  constructor(private auth: Auth) { }

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

    this.auth.signUp(user)
      .then(() => this.showLogin())
  }
}
