import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Auth } from '../../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() public showPanel: EventEmitter<boolean> = new EventEmitter<boolean>()

  public form: FormGroup = new FormGroup({
    'email': new FormControl(null,[
      Validators.required,
      Validators.email,
      Validators.minLength(6),
      Validators.maxLength(20)
    ]),
    'password': new FormControl(null,[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)
    ])
  })

  constructor(
    private auth: Auth
  ) { }

  ngOnInit() {
  }

  public showSignUp(): void{
    this.showPanel.emit(false)
  }

  public authenticate(): void {

    this.auth.authenticate(
      this.form.value.email,
      this.form.value.password
    )
  }
}
