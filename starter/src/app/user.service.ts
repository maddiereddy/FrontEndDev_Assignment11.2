import { Injectable } from '@angular/core'
import { USERS }     from './sample-data'

@Injectable()
export class UserService {
    getUsers() { return USERS }
}

