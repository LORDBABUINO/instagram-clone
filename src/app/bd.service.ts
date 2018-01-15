import { Injectable } from '@angular/core'
import { Progress } from './progress.service'
import * as firebase from 'firebase'

@Injectable()
export class Bd {

  constructor(private progress: Progress){}

  public post(newPost: any): void {

    firebase.database().ref(`posts/${btoa(newPost.email)}`)
      .push({ title: newPost.title })
      .then((response: any) => {
        let imageName = response.key

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
      })
  }

  public getPosts(email: string): any {
    firebase.database().ref(`posts/${btoa(email)}`)
      .once('value')
      .then((snapshot) => {

        let posts: any[] = []

        snapshot.forEach((childSnapshot: any) => {

          let post = childSnapshot.val()

          firebase.storage().ref()
            .child(`images/${childSnapshot.key}`)
            .getDownloadURL()
            .then((url: string) => {
              post.imageUrl = url
              firebase.database().ref(`user_detail/${btoa(email)}`)
                .once('value')
                .then((snapshot: any) => {
                  post.userName = snapshot.val().userName
                  posts.push(post)
                })
            })
        })

        console.log(posts)
      })
  }
}
