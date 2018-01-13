import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as firebase from 'firebase'

import { Bd } from '../../bd.service'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  public email: string
  private image: any

  public form: FormGroup = new FormGroup({
    'title': new FormControl(null)
  })

  constructor(
    private bd: Bd
  ) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email
    })
  }

  public post(): void {
    this.bd.post({
      email: this.email,
      title: this.form.value.title,
      image: this.image
    })
  }

  public prepareImageUpload(event: Event): void {
    this.image = (<HTMLInputElement>event.target).files[0]
  }
}
