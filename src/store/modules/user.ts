import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { login, logout, getUserInfo } from '@/api/users'
import store from '@/store'
import { timingSafeEqual } from 'crypto'
import { rejects } from 'assert'

export interface IUserState {
  logon: boolean,
  authenticated: boolean,
  login?: string,
  roles? : string[]
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  logon = false
  authenticated = false
  login?: string = ''
  roles?:string[] = []

  @Mutation
  _authenticated(authenticated: boolean) {
    this.authenticated = authenticated
    if (!authenticated) {
      this.login = undefined
      this.roles = undefined
    }
  }

  @Mutation
  _account(account:any) {
    this.login = account.login
    this.roles = account.authorities
  }

  @Action
  public async Login(userInfo: { username: string, password: string }) {
    let { username, password } = userInfo
    username = username.trim()
    const { data } = await login({ username, password })
    const bearerToken = data.id_token
    if (bearerToken) {
      // if (this.rememberMe) {
      //   localStorage.setItem('jhi-authenticationToken', jwt);
      // } else {
      sessionStorage.setItem('jhi-authenticationToken', bearerToken)
      // }
    }
    this._authenticated(true)

    // this.GetUserInfo();
  }

  @Action
  public Logout() {
    this._authenticated(false)
  }

  @Action
  public async GetUserInfo() {
    const { data } = await getUserInfo()
    this._account(data)
  }
}

export const UserModule = getModule(User)
