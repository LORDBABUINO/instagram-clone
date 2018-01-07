import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { Auth } from './auth.service'

@Injectable()
export class AuthGuard {

  constructor(private auth: Auth){}

  canActivate(): boolean {
    if(this.auth.tokenId !== undefined &&
      localStorage.getItem('idToken') != null){
        this.auth.tokenId = localStorage.getItem('idToken')
      }

    return this.auth.tokenId !== undefined
  }
}
