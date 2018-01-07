import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { User } from './access/user.model'
import * as firebase from 'firebase'

@Injectable()
export class Auth {

  public tokenId: string

  constructor(private router: Router){}

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
            localStorage.setItem('idToken', idToken)
            this.router.navigate(['/home'])
          })
      })
      .catch((error: Error) => console.log(error))
  }
}
