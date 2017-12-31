import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Auth } from '../../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() public showPanel: EventEmitter<boolean> = new EventEmitter<boolean>()

  public form: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'password': new FormControl(null)
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
