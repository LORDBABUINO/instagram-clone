import { Injectable } from '@angular/core'
import { Progress } from './progress.service'
import * as firebase from 'firebase'

@Injectable()
export class Bd {

  constructor(private progress: Progress){}

  public post(newPost: any): void {

    let imageName = Date.now()

    firebase.storage().ref()
      .child(`images/${imageName}`)
      .put(newPost.image)
      .on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: any) => {
          this.progress.status = 'progress'
          this.progress.state = snapshot
        },
        (error) => {
          this.progress.status = 'error'
        },
        () => {
          this.progress.status = 'complete'
        }
      )

    /*
    firebase.database().ref(`publicacoes/${btoa(newPost.email)}`)
      .push({ title: newPost.title })
    */
  }
}
