import { User } from './access/user.model'
import * as firebase from 'firebase'

export class Auth {
  public signUp(user: User): void {

    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
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
      .then((response:any) => console.log(response))
      .catch((error: Error) => console.log(error))
  }
}
