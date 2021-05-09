import {Injectable} from '@angular/core';

import { AuthStore } from './auth.store';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { Auth } from './auth.model';
import { User } from '../../models/user.model';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService extends NgEntityService<Auth> {

  constructor(private loginStore: AuthStore) {
    super(loginStore);
  }

  // login(user: User, isRememberMe?: boolean): Observable<User> {
  //    return this.getHttp().
  //   post<User>(  `${environment.baseUrl}/authenticate`, {}, {
  //     observe: 'response',
  //     params: {
  //       username: user.username,
  //       password: user.password
  //     }
  //   });

  // }


  // refreshToken(): void

}
