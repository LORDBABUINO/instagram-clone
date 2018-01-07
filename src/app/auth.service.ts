import { User } from './access/user.model'
import * as firebase from 'firebase'

export class Auth {

  public tokenId: string

  public signUp(user: User): Promise<any> {

    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((response: any) => {

        delete user.password

        firebase.database().ref(`user_detail/${btoa(user.email)}`)
          .set(user)
      })
      .catch((error: Error) => {
        console.log(error)
      })
  }

  public authenticate(email: string, password: string): void {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response:any) => {
        firebase.auth().currentUser.getIdToken()
          .then((idToken: string) => {
            this.tokenId = idToken
            console.log(this.tokenId)
          })
      })
      .catch((error: Error) => console.log(error))
  }
}
