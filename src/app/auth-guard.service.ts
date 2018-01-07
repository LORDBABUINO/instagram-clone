import { CanActivate } from '@angular/router'

export class AuthGuard {
  canActivate(): boolean {
    return true
  }
}
