import * as firebase from 'firebase'

export class Bd {
  public post(newPost: any): void {

    let imageName = Date.now()

    firebase.storage().ref()
      .child(`images/${imageName}`)
      .put(newPost.image)
      .on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: any) => {
          console.log(snapshot)
        },
        (error) => {
          console.log(error)
        },
        () => {
          console.log('upload complete')
        }
      )

    /*
    firebase.database().ref(`publicacoes/${btoa(newPost.email)}`)
      .push({ title: newPost.title })
    */
  }
}
