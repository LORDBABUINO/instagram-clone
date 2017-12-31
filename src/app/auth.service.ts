import { User } from './access/user.model'
import * as firebase from 'firebase'

export class Auth {
  public signUp(user: User): void {
    console.log(user)

    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((response: any) => {
        console.log(response)
      })
      .catch((error: Error) => {
        console.log(error)
      })
  }
}
