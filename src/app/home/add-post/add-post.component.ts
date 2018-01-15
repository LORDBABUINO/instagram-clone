import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as firebase from 'firebase'

import { Bd } from '../../bd.service'
import { Progress } from '../../progress.service'

import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import 'rxjs/Rx'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  public email: string
  private image: any

  public postProgress: string = 'pending'
  public uploadPercentage: number

  public form: FormGroup = new FormGroup({
    'title': new FormControl(null)
  })

  constructor(
    private bd: Bd,
    private progress: Progress
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

    let watchUpload = Observable.interval(1500)
    let continueProgress = new Subject()

    continueProgress.next(true)

    watchUpload
      .takeUntil(continueProgress)
      .subscribe(() => {

        console.log(this.progress.state)

        this.uploadPercentage = Math.round(100*this.progress.state.bytesTransferred/this.progress.state.totalBytes)
        if(this.progress.status === 'complete')
          continueProgress.next(false)

        this.postProgress = this.progress.status
      })
  }

  public prepareImageUpload(event: Event): void {
    this.image = (<HTMLInputElement>event.target).files[0]
  }
}
