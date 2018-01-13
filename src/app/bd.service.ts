import * as firebase from 'firebase'

export class Bd {
  public post(newPost: any): void {

    let imageName = Date.now()

    firebase.storage().ref()
      .child(`images/${imageName}`)
      .put(newPost.image)

    /*
    firebase.database().ref(`publicacoes/${btoa(newPost.email)}`)
      .push({ title: newPost.title })
    */
  }
}
