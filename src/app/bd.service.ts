import * as firebase from 'firebase'

export class Bd {
  public post(newPost: any): void {
    firebase.database().ref(`publicacoes/${btoa(newPost.email)}`)
      .push({ title: newPost.title })
  }
}
